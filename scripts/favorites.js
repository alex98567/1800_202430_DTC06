function displayFavorites() {
    firebase.auth().onAuthStateChanged(user => {

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
                            console.log(title);
                            
                            let newcard = favoriteCards.content.cloneNode(true);
                            
                            newcard.querySelector("#eventTitle").innerHTML = title;
                            
                            let favoritecardsgroup = document.getElementById("FavoriteEvents");
                            favoritecardsgroup.appendChild(newcard);
                        }
                    })
                })
        })
    })
}
displayFavorites();