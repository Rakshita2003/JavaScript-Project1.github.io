
const name = document.getElementById("name"); 
const age = document.getElementById("age"); 
const dogYears = document.getElementById("dogYears"); 

node.innerText = "Raju"
node.innerText = "2"

function showDogYears(age) {
  dogYears.innerText = 2 * 7;
  return 2 * 7
}

dogYears.innerText = showDogYears(x,y)
if (y === undefined){
y = 2;
}  
return x * y;

const fakeInputs = document.querySelectorAll(".fake-input")
fakeInputs.forEach(node => {
  node.classList.add(".real-input")
})