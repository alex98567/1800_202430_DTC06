function loadSkeleton() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      $("#navbarPlaceholder").load("./text/navbar_after_login.html")
      $("#footerPlaceholder").load("./text/footer.html")
    } else {
      // No user is signed in.
      $("#navbarPlaceholder").load("./text/navbar_before_login.html")
      $("#footerPlaceholder").load("./text/footer.html")
    }
  });
}
loadSkeleton();
