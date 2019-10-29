import os
from os import listdir
from os.path import isfile, join
import json

project_dir = "/mnt/d/azuic/major-studio-one/Interactive/inlay/"
object_dir = "objects/"
image_dir = "images/"

onlyfiles = [f.split('.jpg')[0] for f in listdir(os.path.join(project_dir,image_dir)) if f.endswith('.jpg')]

data={'total':len(onlyfiles),'objectIDs':onlyfiles}

with open(os.path.join(project_dir,'used_inlays_IDs.json'),'w') as json_file:
    json.dump(data,json_file)
