import urllib.request
import urllib.parse
import os
import json
import requests

project_dir = "/mnt/d/azuic/major-studio-one/Interactive/toys/"
object_dir = "objects/"
image_dir = "images/"

with open(os.path.join(project_dir,'toys_IDs.json')) as json_file:
    objectIDs = json.load(json_file)['objectIDs']
for i, objID in enumerate(objectIDs):
    print("--------- Loading {}".format(objID))
    with open(os.path.join(project_dir, object_dir,"OBJ_" + str(objID) + ".json")) as file:
        obj = json.load(file)
    if obj['primaryImage'] == "":
        print("****** No image [ID {}]".format(obj))
    else:
        try:
            urllib.request.urlretrieve(urllib.parse.quote(obj['primaryImage'], safe="%/:=&?~#+!$,;'@()*[]"), os.path.join(image_dir, str(obj['objectID'])+".jpg"))
        except ValueError as e:
            r = requests.get(obj['primaryImage'])
            open(os.path.join(image_dir, str(objID)+".jpg"),'wb').write(r.content)
            print("~~~~~~~~~" + str(e))
        print("[{}/{}] [ID {}] image downloaded".format(i+1,len(objectIDs),obj['objectID']))
