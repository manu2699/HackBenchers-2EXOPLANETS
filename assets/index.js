var dataset;
function init() {
 loadJSON(function(response) {
  // Parse JSON string into object
    dataset = JSON.parse(response);
     var j;
     for (j = 0; j < dataset.length; j++)
    addEXP(j);
    
 });
}
function loadJSON(callback) {   

  var xobj = new XMLHttpRequest();
      xobj.overrideMimeType("application/json");
  xobj.open('GET', 'dataset.json', true); // Replace 'my_data' with the path to your file
  xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
          // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
          callback(xobj.responseText);
        }
  };
  xobj.send(null);  
}

function addEXP(i) {
  var card = document.createElement('div');
  var layer = document.createElement('div');
  var content = document.createElement('div');
  
  layer.className="layer";
  card.className="card";
  content.className="content";
  
  content.innerHTML = dataset[i].PlanetIdentifier+"<br>"+dataset[i].PeriodDays+"<br>"+dataset[i].ListsPlanetIsOn+"<br>"+dataset[i].DiscoveryMethod+"<br>"+dataset[i].TypeFlag;
  
  card.appendChild(layer);
  card.appendChild(content);
  document.getElementById('ref').appendChild(card);
}