function displayCardsDynamically(collection) {
  let cardTemplate = document.getElementById("eventItemTemplate");

  db.collection(collection).get()
    .then(allEvents => {
      allEvents.forEach(doc => { //iterate thru each doc
        var title = doc.data().name;       // get value of the "name" key
        var details = doc.data().description;
        var docID = doc.id;
        var date = doc.data().date;
        let newcard = cardTemplate.content.cloneNode(true); // Clone the HTML template to create a new card (newcard) that will be filled with Firestore data.

        //update title and text and image
        newcard.querySelector('#eventTitle').innerHTML = title;
        newcard.querySelector('#eventBriefDescription').innerHTML = details;
        newcard.querySelector("#date").innerHTML = date;
        newcard.querySelector('#eventButton').href = "event.html?docID="+docID;
        document.getElementById("eventItemList").appendChild(newcard);

      })
    })
}
displayCardsDynamically("Events");

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