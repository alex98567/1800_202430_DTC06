function saveSettings() {
    const notificationSetting = document.getElementById('notificationSetting').value;

    const notificationType = document.getElementById('notificationType').value; // Single value now
    const notificationTime = document.getElementById('notificationTime').value;
    const currentUser = firebase.auth().currentUser;

    if (currentUser) {
        db.collection("users").doc(currentUser.uid).update({
            notifications: notificationSetting,
            notificationType: notificationType, // Save as a single string
            notificationTime: `${notificationTime} minutes before`,
        }).then(() => {
            alert("Settings saved successfully!");
        }).catch((error) => {
            console.error("Error saving settings:", error);
        });
    } else {
        alert("No user signed in");
    }
}
