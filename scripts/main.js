// function getNameFromAuth() {
//   firebase.auth().onAuthStateChanged((user) => {
//     // Check if a user is signed in:
//     if (user) {
//       // Do something for the currently logged-in user here:
//       console.log(user.uid); //print the uid in the browser console
//       console.log(user.displayName); //print the user name in the browser console
//       userName = user.displayName;

//       //method #1:  insert with JS
//       document.getElementById("name-goes-here").innerText = userName;

//       //method #2:  insert using jquery
//       //$("#name-goes-here").text(userName); //using jquery

//       //method #3:  insert using querySelector
//       //document.querySelector("#name-goes-here").innerText = userName
//     } else {
//       // No user is signed in.
//       console.log("No user is logged in");
//     }
//   });
// }
// getNameFromAuth(); //run the function

// Function to read the quote of the day from the Firestore "quotes" collection
// Input param is the String representing the day of the week, aka, the document name

function readMap(map) {
  db.collection("floor plans").doc(map) //name of the collection and documents should matach excatly with what you have in Firestore
    .onSnapshot(mapDoc => {
      //arrow notation
      console.log("current document data: " + mapDoc.data()); //.data() returns data object
      document.getElementById("floor-plan-goes-here").innerHTML = mapDoc.data().floorplan; //using javascript to display the data on the right place

      //Here are other ways to access key-value data fields
      //$('#quote-goes-here').text(dayDoc.data().quote);         //using jquery object dot notation
      //$("#quote-goes-here").text(dayDoc.data()["quote"]);      //using json object indexing
      //document.querySelector("#quote-goes-here").innerHTML = dayDoc.data().quote;
    }, (error) => {
      console.log("Error calling onSnapshot", error);
  });
}
readMap("floor1"); //calling the function

function writeEventLoop(max) {
  //define a variable for the collection you want to create in Firestore to populate data
  var eventsRef = db.collection("Events");
  for (i = 1; i <= max; i++) {
    eventsRef.add({ //add to database, autogen ID
      name: "Event " + i,
      details: "This will be the description of the event. Maybe some other information.",
      last_updated: firebase.firestore.FieldValue.serverTimestamp()
    })
  }
}


function displayCardsDynamically(collection) {
  let cardTemplate = document.getElementById("eventItemTemplate");

  db.collection(collection).get()
    .then(allEvents => {
      allEvents.forEach(doc => { //iterate thru each doc
        var title = doc.data().name;       // get value of the "name" key
        var details = doc.data().details;  // get value of the "details" key
        let newcard = cardTemplate.content.cloneNode(true); // Clone the HTML template to create a new card (newcard) that will be filled with Firestore data.

        //update title and text and image
        newcard.querySelector('#eventTitle').innerHTML = title;
        newcard.querySelector('#eventBriefDescription').innerHTML = details;
        document.getElementById("eventItemList").appendChild(newcard);

      })
    })
}

displayCardsDynamically("Events");