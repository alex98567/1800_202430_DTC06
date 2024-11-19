function homeFavorites() {
    firebase.auth().onAuthStateChanged(user => {
        db.collection("users").doc(user.uid).get().then(userDoc => {
            let favoritesarray = userDoc.data().favorites;

            console.log(favoritesarray);

            let favoriteCards = document.getElementById("favoritesbox");

            favoritesarray.forEach(eventID => {
                console.log(eventID);
                db.collection("Events").doc(eventID).get().then(favdoc => {
                    if (favdoc.exists) {
                        console.log(favdoc);
                        var name = favdoc.data().name;
                        var details = favdoc.data().description
                        var docID = favdoc.id;
                        console.log(name);
                        console.log(details)

                        let newfav = favoriteCards.content.cloneNode(true);
                        newfav.querySelector(".favoritesbox-name").innerHTML = name;
                        newfav.querySelector(".favoritesbox-details").innerHTML = details
                        newfav.querySelector("a").href = "event.html?docID=" + eventID;

                        let favoritecardsgroup = document.getElementById("favoritesbox");
                        favoritecardsgroup.appendChild(newfav);
                    }
                })
            })
        })
    })
}
homeFavorites();