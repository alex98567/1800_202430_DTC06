function displayFavorites() {
    firebase.auth().onAuthStateChanged(user => {

        db.collection("users").doc(user.uid).get().then(userDoc => {
            let favoritesarray = userDoc.data().favorites;
            console.log(favoritesarray);
            
            let favoriteCards = document.getElementById("favoriteEvent");
            
            favoritesarray.forEach(eventID => {
                console.log(eventID);
                db.collection("events").doc(eventID).get().then(favdoc => {
                    console.log(favdoc)
                    var title = favdoc.data().name;
                    console.log(title);
                    
                    let newcard = favoriteCards.content.cloneNode(true);
                    
                    newcard.querySelector("eventTitle").innerHTML = title;
                    
                    let favoritecardsgroup = document.getElementById("FavoriteEvents");
                    favoritecardsgroup.appendChild(newcard);
                })
            })
        })
    })
}
displayFavorites();