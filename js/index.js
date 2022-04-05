import forBinaryFunction from './binary.js';
const input = document.getElementById('inputValue')
const btn = document.getElementById("btn");
const area = document.querySelector(".valueArea")
const select = document.getElementById("selectType");

function eventClick(event) {
  event.preventDefault();

  area.innerText = ""
  let valueResult;
  let value = input.value
  switch(select.value){
    case "Binary":
      valueResult = forBinaryFunction(value)
    case "Decimal":
  }
  

  for(let i=0;i < valueResult.length; i++){
    area.innerText += valueResult[i]
  }
}

btn.addEventListener("click", eventClick)