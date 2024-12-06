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
        newcard.querySelector(".addFavorite").id = docID;
        newcard.querySelector(".heartIcon").id = "favorite" + docID;
        newcard.querySelector("#Type").innerHTML = doc.data().type;
        firebase.auth().onAuthStateChanged(user =>{
          userID = db.collection("users").doc(user.uid);
          userID.get().then(userDoc =>{
            var favorited = userDoc.data().favorites;
            if (favorited.includes(docID)){
              document.querySelector('#favorite' + docID).className = 'material-symbols-outlined filled heartIcon';
            }
            else{
              document.querySelector("#favorite" + docID).className = 'material-symbols-outlined outline heartIcon';
            }
          })
        })
        
        document.getElementById("eventItemList").appendChild(newcard);

      })
    })
}
displayCardsDynamically("Events");



function addToFavorites(ID) {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
          userID = db.collection("users").doc(user.uid);
          favoriteButton = document.querySelector(".addFavorite");
          firebase.auth().onAuthStateChanged(user =>{
            userID = db.collection("users").doc(user.uid);
            userID.get().then(userDoc =>{
              var favorited = userDoc.data().favorites;
              if (favorited.includes(ID)) {
                userID.update({
                    favorites: firebase.firestore.FieldValue.arrayRemove(ID)
                })
                    .then(async() => {
                        if (favoriteButton) {
                          console.log("removed")
                          location.reload(true)
                        }
                    })
            }
            else{
                userID.update({
                    favorites: firebase.firestore.FieldValue.arrayUnion(ID)
                })
                    .then(async() => {
                        if (favoriteButton) {
                          console.log("added")
                          location.reload(true)
                        }
                    })
            }
            })
          })
        }
        else {
            alert("Error! No user signed in!")
        }

    })

}

var count = 0
function ShowOptions(){
  count++
  options = document.getElementById("options")
  if (count == 1){
    options.style = "display: block"
  }
  else{
    options.style = "display: none"
    count = 0
  }
}

async function Filtered(){
  Inform = document.getElementById("Informative")
  Social = document.getElementById("Social")
  var typefilter = []
  if (Inform.checked == true){
    typefilter.push("Informative")
  }
  else if (Social.checked == true){
    typefilter.push("Social")
  }
  if (typefilter.length === 0){
    typefilter = null
  }
    const Eventsref = db.collection("Events");
    query = Eventsref
    if (typefilter){
      query = Eventsref.where('type', 'in', typefilter);
    }
    var filteredEvents = await query.get();
    let cardTemplate = document.getElementById("eventItemTemplate");
    // var eventIdList = [] 
    // filteredEvents.forEach(item =>{
    //   eventIdList.push(item.id)
    // })

    document.getElementById("eventItemList").innerHTML = ''
    // console.log(eventIdList)
      filteredEvents.forEach(doc => { //iterate thru each doc
       
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
          newcard.querySelector(".addFavorite").id = docID;
          newcard.querySelector(".heartIcon").id = "favorite" + docID;
          newcard.querySelector("#Type").innerHTML = doc.data().type;
          firebase.auth().onAuthStateChanged(user =>{
            userID = db.collection("users").doc(user.uid);
            userID.get().then(userDoc =>{
              var favorited = userDoc.data().favorites;
              if (favorited.includes(docID)){
                document.querySelector('#favorite' + docID).className = 'material-symbols-outlined filled heartIcon';
              }
              else{
                document.querySelector("#favorite" + docID).className = 'material-symbols-outlined outline heartIcon';
              }
            })
          })
          
          document.getElementById("eventItemList").appendChild(newcard);
          
        })
}
