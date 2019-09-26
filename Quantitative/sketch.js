let colors;

function preload(){
  colors = [{"objectID": 453896, "percent": [0.09646446446446447, 0.4298368368368368, 0.32136136136136134, 0.15233733733733734], "colors": [[48.772275681105796, 66.5655252855133, 69.60053736563144], [166.2324042225939, 169.22103039768106, 173.67710819833286], [134.5321355645446, 141.13094837890716, 144.28337442104439], [84.75834673847848, 106.70427760091991, 109.45038573911631]]}, {"objectID": 199226, "percent": [0.3684328942219903, 0.03589735228903091, 0.5158080083474631, 0.07986174514151559], "colors": [[161.93985361667598, 161.93985361667598, 161.93985361667598], [41.905622672372914, 41.905622672372914, 41.905622672372914], [135.44420562875854, 135.44420562875854, 135.44420562875854], [99.5429528009278, 99.5429528009278, 99.5429528009278]]}, {"objectID": 210104, "percent": [0.19400011178180193, 0.3514793305286263, 0.2200330772513871, 0.23448748043818465], "colors": [[118.08243641224418, 118.08243641224418, 118.08243641224418], [170.40448367926373, 170.40448367926373, 170.40448367926373], [75.46159752476783, 75.46159752476783, 75.46159752476783], [140.36901665106458, 140.36901665106458, 140.36901665106458]]}, {"objectID": 694385, "percent": [0.8495630686915289, 0.07074452534281686, 0.06239420468623179, 0.017298201279422443], "colors": [[235.59837744554216, 233.021035113482, 232.50549389730338], [66.75893881860827, 43.77865334958096, 35.05681772842951], [113.18905261183028, 84.21303077111497, 65.404973704886], [164.33650735209542, 139.95119824873981, 119.11218203293939]]}, {"objectID": 190904, "percent": [0.5362156862745098, 0.12426229644400133, 0.2501772183449651, 0.08934479893652376], "colors": [[219.1659282524405, 219.1659282524405, 219.1659282524405], [112.10645277363236, 112.10645277363236, 112.10645277363236], [171.76448732088178, 171.76448732088178, 171.76448732088178], [48.306446996078336, 48.306446996078336, 48.306446996078336]]}, {"objectID": 446397, "percent": [0.5162879689110953, 0.22197834879847728, 0.22015028947577128, 0.0415833928146562], "colors": [[200.6424377521934, 182.556091884923, 180.95460270589794], [52.82678500485659, 64.37823233056669, 27.353574026309985], [85.48652986854168, 97.26701294503154, 49.12799217297038], [150.69304385088427, 132.37489882397927, 98.10946055324959]]}, {"objectID": 204517, "percent": [0.19426646392162378, 0.38912432541273717, 0.2214230167698618, 0.19518619389577724], "colors": [[138.7142752461338, 128.87748352052512, 114.59826022856944], [24.850716161429844, 27.71267274220176, 34.68944768760704], [199.41958664709534, 191.13305264440865, 184.7746538015463], [77.82108602942841, 77.13927122176393, 77.41363594817852]]}, {"objectID": 194414, "percent": [0.1446238377007608, 0.08996618765849534, 0.09878064243448859, 0.6666293322062553], "colors": [[221.41185925530988, 221.41185925530988, 221.41185925530988], [34.67415202470727, 34.67415202470727, 34.67415202470727], [110.21087649484804, 110.21087649484804, 110.21087649484804], [187.17604430501916, 187.17604430501916, 187.17604430501916]]}, {"objectID": 201715, "percent": [0.20733172114743162, 0.0893950967311541, 0.32906937958639093, 0.37420380253502333], "colors": [[88.85207261975857, 89.73847934626598, 89.88797574270687], [204.82213883038193, 204.71141949228883, 204.28150430155418], [138.46822204431888, 137.72034552183388, 137.90676452470314], [42.878119059929844, 43.77215626746041, 43.70158335009844]]}, {"objectID": 196429, "percent": [0.13614933617598604, 0.3311197790483574, 0.39407161546661496, 0.13865926930904157], "colors": [[152.2704428241005, 131.27225680242898, 99.22920149383799], [52.94504843286573, 39.11702174348382, 31.37188698017745], [95.24679410372131, 82.67947181821955, 70.69050735188468], [189.79915585210082, 179.29676526726848, 145.89434140710094]]}, {"objectID": 200807, "percent": [0.41065781151170144, 0.2755629348513599, 0.16625869702719798, 0.14752055660974067], "colors": [[140.4294801694486, 140.4294801694486, 140.4294801694486], [184.7639700228851, 184.7639700228851, 184.7639700228851], [73.25070856561517, 73.25070856561517, 73.25070856561517], [223.75459846508534, 223.75459846508534, 223.75459846508534]]}, {"objectID": 450243, "percent": [0.622113343551397, 0.14165058069812034, 0.1277215214226623, 0.10851455432782028], "colors": [[205.30529440872243, 209.80400585510904, 204.4209446643944], [8.82737232892282, 14.258511408857856, 8.544005795037862], [145.8561313648707, 152.91679220649007, 144.40920960129057], [81.66749394315532, 91.28771494418098, 80.10748685223766]]}, {"objectID": 503543, "percent": [0.338409393984294, 0.2427628167135872, 0.1447788561268336, 0.2740489331752852], "colors": [[92.22067274549926, 92.22067274549926, 92.22067274549926], [201.45440119032145, 201.45440119032145, 201.45440119032145], [158.40576827134294, 158.40576827134294, 158.40576827134294], [116.949241202994, 116.949241202994, 116.949241202994]]}, {"objectID": 325128, "percent": [0.45414576124567474, 0.20485726643598615, 0.1246885813148789, 0.21630839100346022], "colors": [[240.56770334810113, 240.53549336437626, 240.77973494854223], [106.8181357595569, 109.76255264368073, 114.26856376853979], [48.68326364909771, 51.227199389489584, 57.36822747691832], [216.35067635792794, 216.45118525119253, 216.82183741409654]]}, {"objectID": 206480, "percent": [0.34637250830564786, 0.08712209302325581, 0.10932724252491695, 0.4571781561461794], "colors": [[226.89622511439126, 226.89622511439126, 226.89622511439126], [99.68604318608119, 99.68604318608119, 99.68604318608119], [157.0496277444679, 157.0496277444679, 157.0496277444679], [200.62127288502413, 200.62127288502413, 200.62127288502413]]}, {"objectID": 203378, "percent": [0.348535546875, 0.183560234375, 0.1188165625, 0.34908765625], "colors": [[85.83343541072347, 76.27181543886121, 76.16920321860162], [155.1138981390742, 138.20684661472632, 127.93701419951255], [198.57872414359565, 190.09606182518087, 183.96283170715742], [109.18455481874363, 105.3884590807035, 104.92731349175006]]}, {"objectID": 201345, "percent": [0.13548672165322215, 0.4629452551436599, 0.12179144385026738, 0.27977657935285055], "colors": [[92.63194688335867, 92.63194688335867, 92.63194688335867], [157.38646742402688, 157.38646742402688, 157.38646742402688], [122.66284023888743, 122.66284023888743, 122.66284023888743], [175.0692794258924, 175.0692794258924, 175.0692794258924]]}, {"objectID": 327545, "percent": [0.6899873015873016, 0.13377142857142857, 0.07071904761904763, 0.10552222222222223], "colors": [[235.84561942677345, 235.84561942677345, 235.84561942677345], [169.49698609332103, 169.49698609332103, 169.49698609332103], [46.79705070375559, 46.79705070375559, 46.79705070375559], [116.07014245108518, 116.07014245108518, 116.07014245108518]]}, {"objectID": 554861, "percent": [0.31834931594425264, 0.21168264927758598, 0.14585602864083877, 0.3241120061373226], "colors": [[138.5236463826829, 138.5236463826829, 138.5236463826829], [28.53265642670361, 28.53265642670361, 28.53265642670361], [93.82041481847403, 93.82041481847403, 93.82041481847403], [172.22309537354712, 172.22309537354712, 172.22309537354712]]}, {"objectID": 451901, "percent": [0.3476514377463144, 0.2031615822507663, 0.15892181190093904, 0.2902651681019802], "colors": [[144.3982644633275, 145.56059134708107, 149.11293974172105], [85.84728023483214, 96.18708123461195, 123.23278342231944], [181.85580717112222, 176.52420777889768, 170.33549003745756], [121.26953314508029, 125.22268815413362, 134.79063964111265]]}]
};

function setup() {
  createCanvas(720, 400);
  console.log("create")
};


function draw() {
  background(0);
  for (i=0; i<colors.length; i++){
    let img = loadImage("/Volumes/AZUIC/major-studio-1/ceramics/primary-images"+colors[i].objectID+'.jpg')
    image(img,50+70*i,50,img.width/img.height*50,50)
    noStroke();
    for (c=0; c<4; c++){
      fill(colors[i].colors[c]);
      rect(50+70*i,50+50*(i+1),100*colors[i].percent[c],50)
    }

  }

}
