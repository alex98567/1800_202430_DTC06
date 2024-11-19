function homeFavorites() {
    firebase.auth().onAuthStateChanged(user => {
        db.collection("users").doc(user.uid).get().then(userDoc => {
            let favoritesarray = userDoc.data().favorites;

            console.log(favoritesarray);

            let favoriteCards = document.getElementById("favoriteTemplateHome");

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


function homeEvents(collection){
    let cardTemplate = document.querySelector("#eventBoxTemplate");

    db.collection(collection).get()
    .then(eventdoc => {
        let count = 0
        eventdoc.forEach(doc => { 
            if(count >= 2) return;

            var title = doc.data().name;       
            var details = doc.data().description;
            var docID = doc.id;
                
            let newcard = cardTemplate.content.cloneNode(true); 
                
            newcard.querySelector('#eventName').innerHTML = title;
            newcard.querySelector('#eventDesc').innerHTML = details;
            newcard.querySelector('a').href = "event.html?docID="+docID;
                
            document.getElementById("eventboxeshome").appendChild(newcard);
            count++;
        })
    })
}
homeEvents("Events");