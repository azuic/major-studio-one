import requests
import json

object_url = "https://collectionapi.metmuseum.org/public/collection/v1/objects/"
search_url = "https://collectionapi.metmuseum.org/public/collection/v1/search"
param = "medium"
value = "Ceramics"
query = "ceramics"

# url = search_url + "?" + param + "=" + value + "&q=" + query
url =  search_url + "?q=toy"
try:
    res = requests.get(url)
    data = res.json()
    objectIDs = data['objectIDs']
    with open("toys_IDs.json",'w') as outfile:
        json.dump(data,outfile)
    print("All toys ID found.")
except requests.RequestException as e:
    print(e)


# ceramics = {}
for i, each in enumerate(objectIDs):
    try:
        obj_res = requests.get(object_url+str(each))
        obj = obj_res.json()
        print("[{}/{}] Object ID: {} fetched".format(i+1, len(objectIDs), str(each)))
    except requests.RequestException as e:
        print("************** cannot fetch object" + str(each))
        print(e)
        obj = {}
    with open("./objects/OBJ_" + str(each) + ".json", 'w') as outfile:
        json.dump(obj, outfile)
# with open("ceramics_objects.json",'w') as outfile:
#     json.dump(ceramics,outfile)
