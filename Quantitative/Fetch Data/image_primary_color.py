import numpy as np
import urllib.request
import cv2
import os
import json


def img_from_url(url):
    res = urllib.request.urlopen(url)
    img = np.asarray(bytearray(res.read()), dtype="uint8")
    img = cv2.imdecode(img, cv2.IMREAD_COLOR)
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    return img


path = os.fsencode("./ceramics")
with os.scandir(path) as it:
    for entry in it:
        if not entry.name.startswith('.') and entry.is_file():
            with open(entry) as json_file:
                obj = json.load(json_file)
            obj_img = {'objectID': obj['objectID']}
            if 'primaryImage' in obj and obj['primaryImage'] != "":
                obj_img['image'] = img_from_url(obj['primaryImage'])
            else:
                obj_img['image'] = []
            with open("./ceramics_images/IMG_OBJ_" + str(entry.name) + ".json", 'w') as outfile:
                json.dump(obj_img, outfile)
