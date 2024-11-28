function displayEventInfo() {
    let params = new URL( window.location.href ); 
    let ID = params.searchParams.get( "docID" ); 
    // console.log( ID );

    db.collection("Events")
        .doc(ID)
        .get()
        .then(doc => {
            thisEvent = doc.data();
            eventDescription = thisEvent.description;
            eventName = thisEvent.name;
            eventImage = thisEvent.image;


            document.getElementById("eventTitleName").innerHTML = eventName;
            document.getElementById("EventText").innerHTML = eventDescription;
            firebase.auth().onAuthStateChanged(user =>{
                userID = db.collection("users").doc(user.uid);
                userID.get().then(userDoc =>{
                  var favorited = userDoc.data().favorites;
                  if (favorited.includes(ID)){
                    document.getElementById("AddFavorite").innerHTML = "Remove from Favorites"
                  }
                  else{
                    document.getElementById("AddFavorite").innerHTML = "Add to Favorites"
                  }
                })
              })
        });
}
displayEventInfo();

function addToFavorites() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            let params = new URL(window.location.href);
            let ID = params.searchParams.get("docID");
            userID = db.collection("users").doc(user.uid);
            favoriteButton = document.getElementById("AddFavorite");
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

