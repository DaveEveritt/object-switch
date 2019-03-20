const numSwitch = (num) => ({
  "one": "one is solo",
  "two": "two is a couple",
  "three": "three is more"
})[num]

choices = document.getElementById("numbers");
// console.log(choices);

function whichNum(){
  let select = choices[choices.selectedIndex].value;
  // console.log(numSwitch(select));
  document.getElementById("choice").innerHTML = numSwitch(select);
}

choices.addEventListener("change", whichNum);
