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


project_dir = "/Users/zuic/PycharmProjects/major-studio-1/"

clt = KMeans(n_clusters=4)

for subdir, dirs, files in os.walk(os.path.join(project_dir, "ceramics_images")):
    for i, file in enumerate(files):
        if file.endswith(".json"):
            with open(os.path.join(subdir, file)) as json_file:
                obj = json.load(json_file)
            img = np.array(obj['image'])
            img = img.reshape((img.shape[0] * img.shape[1], 3))
            clt.fit(img)
            hist = color_hist(clt)
            obj['primaryColors'] = {'percent': hist, 'colors': clt.cluster_centers_}
            with open(os.path.join(project_dir,
                                   "ceramics_colors", "COLOR_OBJ_"+str(obj['objectID'])+".json"), 'w') as outfile:
                json.dump(obj, outfile)
