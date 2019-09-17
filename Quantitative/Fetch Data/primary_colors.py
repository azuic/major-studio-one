import numpy as np
import urllib.request
import cv2
import os
import json
from sklearn.cluster import KMeans


def color_hist(clt):
    n_Labels = np.arange(0, len(np.unique(clt.labels_)) + 1)
    (hist, _) = np.histogram(clt.labels_, bins=n_Labels)
    hist = hist.astype("float")
    hist /= hist.sum()
    return hist


path = os.fsencode("./ceramics_images")

clt = KMeans(n_clusters=4)

with os.scandir(path) as it:
    for entry in it:
        if not entry.name.startswith('.') and entry.is_file():
            with open(entry) as json_file:
                obj = json.load(json_file)
            img = obj['image']
            img = img.reshape((img.shape[0] * img.shape[1], 3))
            clt.fit(img)
            hist = color_hist(clt)
            obj['primaryColors'] = {'percent': hist, 'colors': clt.cluster_centers_}
            with open("./ceramics_colors/COLOR_OBJ_" + str(entry.name) + ".json", 'w') as outfile:
                json.dump(obj, outfile)