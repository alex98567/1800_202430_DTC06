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
        var details = doc.data().details;
        var docID = doc.id;
        let newcard = cardTemplate.content.cloneNode(true); // Clone the HTML template to create a new card (newcard) that will be filled with Firestore data.

        //update title and text and image
        newcard.querySelector('#eventTitle').innerHTML = title;
        newcard.querySelector('#eventBriefDescription').innerHTML = details;
        newcard.querySelector('#eventButton').href = "event.html?docID="+docID;
        document.getElementById("eventItemList").appendChild(newcard);

      })
    })
}

displayCardsDynamically("Events");

// function imageZoom(imgID, resultID) {
//   var img, lens, result, cx, cy;
//   img = document.getElementById(imgID);
//   result = document.getElementById(resultID);
//   /*create lens:*/
//   lens = document.createElement("DIV");
//   lens.setAttribute("class", "img-zoom-lens");
//   /*insert lens:*/
//   img.parentElement.insertBefore(lens, img);
//   /*calculate the ratio between result DIV and lens:*/
//   cx = result.offsetWidth / lens.offsetWidth;
//   cy = result.offsetHeight / lens.offsetHeight;
//   /*set background properties for the result DIV:*/
//   result.style.backgroundImage = "url('" + img.src + "')";
//   result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
//   /*execute a function when someone moves the cursor over the image, or the lens:*/
//   lens.addEventListener("mousemove", moveLens);
//   img.addEventListener("mousemove", moveLens);
//   /*and also for touch screens:*/
//   lens.addEventListener("touchmove", moveLens);
//   img.addEventListener("touchmove", moveLens);
//   function moveLens(e) {
//     var pos, x, y;
//     /*prevent any other actions that may occur when moving over the image:*/
//     e.preventDefault();
//     /*get the cursor's x and y positions:*/
//     pos = getCursorPos(e);
//     /*calculate the position of the lens:*/
//     x = pos.x - (lens.offsetWidth / 2);
//     y = pos.y - (lens.offsetHeight / 2);
//     /*prevent the lens from being positioned outside the image:*/
//     if (x > img.width - lens.offsetWidth) { x = img.width - lens.offsetWidth; }
//     if (x < 0) { x = 0; }
//     if (y > img.height - lens.offsetHeight) { y = img.height - lens.offsetHeight; }
//     if (y < 0) { y = 0; }
//     /*set the position of the lens:*/
//     lens.style.left = x + "px";
//     lens.style.top = y + "px";
//     /*display what the lens "sees":*/
//     result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
//   }
//   function getCursorPos(e) {
//     var a, x = 0, y = 0;
//     e = e || window.event;
//     /*get the x and y positions of the image:*/
//     a = img.getBoundingClientRect();
//     /*calculate the cursor's x and y coordinates, relative to the image:*/
//     x = e.pageX - a.left;
//     y = e.pageY - a.top;
//     /*consider any page scrolling:*/
//     x = x - window.pageXOffset;
//     y = y - window.pageYOffset;
//     return { x: x, y: y };
//   }
// }

// // Initiate zoom effect:
// imageZoom("mapimage2", "myresult");

var count = 0;
function floorList(){
  count++;
  listFloors = document.querySelector(".dropdown-content");
  arrow = document.querySelector(".arrowdown");
  if (count == 1){
    listFloors.style = "display: block";
    arrow.style = "display: none";
  }
  else if (count == 2){
    listFloors.style = "display:none";
    arrow.style = "display:block";
    count = 0;
  }
}


function ImgZoom(imgID, resultID) {
  const img = document.getElementById(imgID);
  const result = document.getElementById(resultID);

  result.style.display = 'none'; 
  result.style.backgroundSize = `${img.width * 2}px ${img.height * 2}px`; 

  img.addEventListener('mousemove', function (e) {
    const imgRect = img.getBoundingClientRect();
    
    const x = e.clientX - imgRect.left;
    const y = e.clientY - imgRect.top;

    const lensWidth = 100; 
    const lensHeight = 100; 

    result.style.display = 'block';
    result.style.width = `${lensWidth}px`;
    result.style.height = `${lensHeight}px`;
    result.style.left = `${x - lensWidth / 2}px`; 
    result.style.top = `${y - lensHeight / 2}px`; 

    
    const zoomLevel = 2;  

    const bgPosX = (x * zoomLevel - lensWidth / 2);
    const bgPosY = (y * zoomLevel - lensHeight / 2);

    
    result.style.backgroundImage = `url('${img.src}')`; 
    result.style.backgroundPosition = `-${bgPosX}px -${bgPosY}px`; 
    
    result.style.backgroundSize = `${img.width * zoomLevel}px ${img.height * zoomLevel}px`; 
  });

  
  img.addEventListener('mouseleave', function () {
    result.style.display = 'none';
  });
}

ImgZoom('mapimage2', 'myresult');
