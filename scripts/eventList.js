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
        
        
        firebase.auth().onAuthStateChanged(user =>{
          userID = db.collection("users").doc(user.uid);
          userID.get().then(userDoc =>{
            var favorited = userDoc.data().favorites;
            if (favorited.includes(docID)){
              document.querySelector('#favorite' + docID).className = 'material-symbols-outlined filled heartIcon';
              counter = 1
            }
          })
        })
        
        document.getElementById("eventItemList").appendChild(newcard);

      })
    })
}
displayCardsDynamically("Events");


counter = 0
function addToFavorites(ID) {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            counter++;
            userID = db.collection("users").doc(user.uid);
            favoriteButton = document.querySelector(".addFavorite");
            if (counter == 1) {
                userID.update({
                    favorites: firebase.firestore.FieldValue.arrayUnion(ID)
                })
                    .then(() => {
                        if (favoriteButton) {
                            console.log("test")
                        }
                        alert("Added Event to Favorites!");
                    })
            }
            else if (counter == 2) {
                userID.update({
                    favorites: firebase.firestore.FieldValue.arrayRemove(ID)
                })
                    .then(() => {
                        counter = 0;
                        console.log(counter)
                        if (favoriteButton) {
                            console.log("test")
                        }
                    })
            }

        }
        else {
            alert("Error! No user signed in!")
        }

    })

}