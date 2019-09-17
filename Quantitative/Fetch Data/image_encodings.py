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


project_dir = "/Users/zuic/PycharmProjects/major-studio-1/"

for subdir, dirs, files in os.walk(os.path.join(project_dir, "ceramics")):
    for i, file in enumerate(files):
        if file.endswith(".json"):
            with open(os.path.join(subdir, file)) as json_file:
                obj = json.load(json_file)
            obj_img = {'objectID': obj['objectID']}
            if 'primaryImage' in obj and obj['primaryImage'] != "":
                obj_img['image'] = img_from_url(obj['primaryImage']).tolist()
                print("[{}/{}] Object ID: {} image found".format(i + 1, len(files), str(obj['objectID'])))
            else:
                obj_img['image'] = []
                print("********" + "[{}/{}] Object ID: {} NO  IMAGE".format(i + 1, len(files), str(obj['objectID'])))
            with open(os.path.join(project_dir, "ceramics_images", str(obj['objectID']) + ".json"), 'w') as outfile:
                json.dump(obj_img, outfile)



