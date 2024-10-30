firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // Display user information
        document.getElementById("user-name").textContent = user.displayName;
        document.getElementById("user-email").textContent = user.email;

        // Logout function
        document.getElementById("logout").addEventListener("click", function() {
            firebase.auth().signOut().then(() => {
                window.location.assign("login.html");
            }).catch((error) => {
                console.log("Error logging out:", error);
            });
        });

        // Handle updating account info
        document.getElementById("update-info").addEventListener("click", function() {
            $("#updateAccountModal").modal("show"); // Show the modal for updating info
        });

        // Handle form submission for updating account
        document.getElementById("update-account-form").addEventListener("submit", function(e) {
            e.preventDefault();

            const newName = document.getElementById("newName").value;
            const newEmail = document.getElementById("newEmail").value;

            let promises = [];

            if (newName) {
                promises.push(user.updateProfile({ displayName: newName }));
            }

            if (newEmail) {
                promises.push(user.updateEmail(newEmail));
            }

            Promise.all(promises)
                .then(() => {
                    // Update Firestore with the new data
                    return db.collection("users").doc(user.uid).update({
                        name: newName || user.displayName,
                        email: newEmail || user.email
                    });
                })
                .then(() => {
                    alert("Account updated successfully!");
                    window.location.reload();
                })
                .catch((error) => {
                    console.log("Error updating account:", error);
                    alert(error.message);
                });
        });
    } else {
        // Redirect to login if not logged in
        window.location.assign("login.html");
    }
});
