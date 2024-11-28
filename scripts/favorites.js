function displayFavorites() {
    firebase.auth().onAuthStateChanged(user => {
        userID = db.collection("users").doc(user.uid);
        db.collection("users").doc(user.uid).get().then(userDoc => {
            let favoritesarray = userDoc.data().favorites;
                console.log(favoritesarray);
                
                let favoriteCards = document.getElementById("favoriteTemplate");
                
                favoritesarray.forEach(eventID => {
                    console.log(eventID);
                    db.collection("Events").doc(eventID).get().then(favdoc => {
                        if (favdoc.exists){
                            console.log(favdoc);
                            var title = favdoc.data().name;
                            var docID = favdoc.id;
                            console.log(title);
                            
                            let newcard = favoriteCards.content.cloneNode(true);
                            newcard.querySelector("#TitleEvent").innerHTML = title;
                            newcard.querySelector("a").href = "event.html?docID=" + eventID;
                            newcard.querySelector(".removeBtn").id = eventID;
                            let favoritecardsgroup = document.getElementById("FavoriteEvents");
                            favoritecardsgroup.appendChild(newcard);

                            removeBtn = document.getElementById(eventID);
                            removeBtn.addEventListener("click", function(){
                                    userID.update({
                                        favorites: firebase.firestore.FieldValue.arrayRemove(eventID)
                                    })
                                    .then(
                                        setTimeout(()=>{
                                            location.replace(location.href)
                                        },500),
                                    )
                            })
                        }
                    })
                })
        })
    })
}
displayFavorites();
