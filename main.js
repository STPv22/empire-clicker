let cities = 0;
let cps = 0;

console.log('[Here to cheat arent you?]')
console.log('[See code at https://github.com/SyntaxError52/empire-clicker.git]')

console.log('[How to save]')
console.log('[1. Copy the code into the console: genSave()]')
console.log('[2. If all is working the genSave function should generate code that you can use]')
console.log('[3. Now if you reload you can load the save by using that code]')
console.log('[Don\'t worry! A new save/load system is currently being worked on.]')


console.log(['[Note from cobblesteve: if you want to suggest something, we\'ll have a form for that soon.]'])

function seeAchievment(){
  if (cities === 999){
    window.alert('<b>So Close</b> \n Have 999 cities');
  } else if (cities === 0){
    window.alert('<b>Getting Started</b> \n Have 0 cities')
  }
}

function update(){
  document.getElementById('counter').innerHTML = `${cities} Cities, ${cps} Cps`;
  seeAchievment();
}

function add(){
  cities++;
  update()
}

function upgrade(gift, cost){
  if (cities >= cost){
    cities -= cost;
    cps += gift
  } else {
    alert('Sorry, you are too broke for that.')
  }
    update()
}

setInterval(() => {
  cities += cps;
  update()
}, 1000);

function save(currentCities, citiesPS){
  cities = currentCities;
  cps = citiesPS
}

function genSave(){
  console.log(`To save use type the following code: save(${cities}, ${cps})`)
}

function tradeOff(gift, cost){
  cities += cost;
  cps -= gift;
  alert('Soul Sold. >:)');
}