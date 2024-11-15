function saveSettings() {
    const notificationSetting = document.getElementById('notificationSetting').value;

    // Get all selected options for notificationType and store them as an array
    const notificationTypeSelect = document.getElementById('notificationType');
    const notificationTypes = Array.from(notificationTypeSelect.selectedOptions).map(option => option.value);

    const notificationTime = document.getElementById('notificationTime').value;
    const currentUser = firebase.auth().currentUser;

    if (currentUser) {
        db.collection("users").doc(currentUser.uid).update({
            notifications: notificationSetting,
            notificationTypes: notificationTypes,  // Store as an array
            notificationTime: notificationTime
        }).then(() => {
            alert("Settings saved successfully!");
        }).catch((error) => {
            console.error("Error saving settings: ", error);
        });
    } else {
        alert("No user signed in");
    }
}
