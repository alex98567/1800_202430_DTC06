var count = 0;
function floorList(){
  count++;
  listFloors = document.querySelector(".dropdown-content");
  arrow = document.querySelector(".arrowdown");
  if (count == 1){
    listFloors.style = "display: block";
    arrow.style = "display: none";
  }
  else if (count == 2){
    listFloors.style = "display:none";
    arrow.style = "display:block";
    count = 0;
  }
}