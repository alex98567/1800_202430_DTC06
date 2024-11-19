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
            if (eventImg) {
                document.querySelector("#eventImg").src = eventImage;
            }
        });
}
displayEventInfo();

counter = 0
function addToFavorites() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            counter++;
            let params = new URL(window.location.href);
            let ID = params.searchParams.get("docID");
            userID = db.collection("users").doc(user.uid);
            favoriteButton = document.getElementById("AddFavorite");
            if (counter == 1) {
                userID.update({
                    favorites: firebase.firestore.FieldValue.arrayUnion(ID)
                })
                    .then(() => {
                        if (favoriteButton) {
                            favoriteButton.innerHTML = "Remove from Favorites"
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
                            favoriteButton.innerHTML = "Add to Favorites"
                        }
                    })
            }

        }
        else {
            alert("Error! No user signed in!")
        }

    })

}

