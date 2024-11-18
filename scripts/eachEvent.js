function displayEventInfo() {
    let params = new URL( window.location.href ); 
    let ID = params.searchParams.get( "docID" ); 
    // console.log( ID );

    db.collection("Events")
        .doc(ID)
        .get()
        .then(doc => {
            thisEvent = doc.data();
            eventDescription = thisEvent.details;
            eventName = thisEvent.name;
            eventImage = thisEvent.image;


            document.getElementById("eventTitleName").innerHTML = eventName;
            document.getElementById("EventText").innerHTML = eventDescription;
            if (eventImg) {
                document.querySelector("#eventImg").src = eventImage;
            }
        });
}
// displayEventInfo();

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

//----------------------------------------------------------
// Supposed to get event and display on home page in the favorites box
//----------------------------------------------------------
function getEvents(user) {
    db.collection("users").doc(user.uid).get()
        .then(userDoc => {

//             // Get the Array of bookmarks
            var favorites = userDoc.data().favorites;
            console.log(favorites);

            // Get pointer the new card template
            let newcardTemplate = document.getElementById("favoritesbox");
            console.log(newcardTemplate);
            // Iterate through the ARRAY of bookmarked hikes (document ID's)
            bookmarks.forEach(eventID => {
                console.log(eventID);
                db.collection("Events").doc(eventID).get().then(doc => {
                    console.log(doc.data);
                    var name = doc.data().name; // get value of the "name" key
                    var details = doc.data().details; //get unique details to each event to be used for fetching right set of details
                    var docID = doc.id;  //this is the autogenerated ID of the document

//                     //clone the new card
//                     let newcard = newcardTemplate.content.cloneNode(true);

                    //update title and some pertinant information
                    newcard.querySelector('.favoritesbox-name').innerHTML = name;
                    newcard.querySelector('.favoritesbox-details').innerHTML = details;
                    newcard.querySelector('a').href = "event.html?docID=" + docID;
                    
                    //Finally, attach this new card to the gallery
                    hikeCardGroup.appendChild(newcard);
                })
            });
        })
}