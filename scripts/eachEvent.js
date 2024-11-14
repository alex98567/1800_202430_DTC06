function displayEventInfo() {
    let params = new URL( window.location.href ); 
    let ID = params.searchParams.get( "docID" ); 
    console.log( ID );

    db.collection( "Events" )
        .doc( ID )
        .get()
        .then( doc => {
            thisEvent = doc.data();
            eventDescription = thisEvent.details;
            eventName = thisEvent.name;
            eventImage = thisEvent.image;
            
            
            document.getElementById("eventTitleName").innerHTML = eventName;
            document.getElementById("EventText").innerHTML = eventDescription;
            if (eventImg){
                document.querySelector("#eventImg").src = eventImage;
            }
        } );
}
displayEventInfo();