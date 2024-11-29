var currentUser;               //points to the document of the user who is logged in
function populateUserInfo() {
            firebase.auth().onAuthStateChanged(user => {
                // Check if user is signed in:
                if (user) {

                    //go to the correct user document by referencing to the user uid
                    currentUser = db.collection("users").doc(user.uid)

                    currentUser.get()
                        .then(userDoc => {
                            //get the data fields of the user
                            let userName = userDoc.data().name;
                            let userSchool = userDoc.data().school;
                            let userCity = userDoc.data().city;

                            //if the data fields are not empty, then write them in to the form.
                            if (userName != null) {
                                document.getElementById("nameInput").value = userName;
                            }
                            if (userSchool != null) {
                                document.getElementById("schoolInput").value = userSchool;
                            }
                            if (userCity != null) {
                                document.getElementById("cityInput").value = userCity;
                            }
                        })
                } else {
                    // No user is signed in.
                    console.log ("No user is signed in");
                }
            });
        }

//call the function to run it 
populateUserInfo();

function editUserInfo() {
    //Enable the form fields
    document.getElementById('personalInfoFields').disabled = false;
 }

function saveUserInfo() {
    //enter code here

    userName = document.getElementById('nameInput').value;       //get the value of the field with id="nameInput"
    userSchool = document.getElementById('schoolInput').value;     //get the value of the field with id="schoolInput"
    userCity = document.getElementById('cityInput').value;       //get the value of the field with id="cityInput"

    currentUser.update({name: userName, school: userSchool, city: userCity}).then(() => {console.log("Document successfully updated!");
})
    document.getElementById('personalInfoFields').disabled = true;
}

function redirectToSettings() {
        window.location.href = 'settings.html';
    }

    function uploadProfilePhoto() {
        const fileInput = document.getElementById('profilePhotoInput');
        const file = fileInput.files[0];
        if (!file) {
            alert("No file selected!");
            return;
        }
    
        const currentUser = firebase.auth().currentUser;
        const storageRef = firebase.storage().ref('profile_photos/' + currentUser.uid + '.jpg');
        
        storageRef.put(file).then(() => {
            storageRef.getDownloadURL().then(url => {
                db.collection("users").doc(currentUser.uid).update({
                    profilePhoto: url
                }).then(() => {
                    alert("Profile photo updated successfully!");
                    document.getElementById('profilePhotoPreview').src = url;
                    document.getElementById('profilePhotoPreview').style.display = 'block';
                });
            });
        }).catch(error => {
            console.error("Error uploading profile photo:", error);
            alert("Failed to upload photo.");
     
        });
    }
