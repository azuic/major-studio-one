import urllib.request
import urllib.parse
import os
import json
import requests
import re

project_dir = "/mnt/d/azuic/major-studio-one/Interactive/tiles/"
object_dir = "objects/"
image_dir = "images/"

with open(os.path.join(project_dir,'tiles_IDs.json')) as json_file:
    data = json.load(json_file)
objectIDs = data['objectIDs']
for i, objID in enumerate(objectIDs[684+70:]):
    print("--------- Loading {}".format(objID))
    with open(os.path.join(project_dir, object_dir,"OBJ_" + str(objID) + ".json")) as file:
        obj = json.load(file)
    if re.search('tile',obj['title'],re.I) or re.search('tile',obj['objectName'],re.I):
        if obj['primaryImage'] == "":
            print("****** No image [ID {}]".format(obj))
        else:
            try:
                urllib.request.urlretrieve(urllib.parse.quote(obj['primaryImage'], safe="%/:=&?~#+!$,;'@()*[]"), os.path.join(image_dir, str(obj['objectID'])+".jpg"))
            except:
                r = requests.get(obj['primaryImage'])
                open(os.path.join(image_dir, str(objID)+".jpg"),'wb').write(r.content)
                # print("~~~~~~~~~ error" + str(e))
            print("[{}/{}] [ID {}] image downloaded".format(i+1,len(objectIDs),obj['objectID']))
    else:
        data['objectIDs'].remove(objID)
        data['total']-=1
        print("{} won't use".format(objID))

with open(os.path.join(project_dir,'used_tiles_IDs.json'),'w') as json_file:
    json.dump(data,json_file)
