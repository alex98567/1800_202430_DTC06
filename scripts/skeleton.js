//---------------------------------------------------
// This function loads the parts of your skeleton
// (navbar, footer, and other things) into html doc.
//---------------------------------------------------
function loadSkeleton() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // If the "user" variable is not null, then someone is logged in
      // User is signed in.
      // Do something for the user here.
      $("#navbarPlaceholder").load("navbar_after_login.html")
      $("#footerPlaceholder").load("footer.html")
    } else {
      // No user is signed in.
      $("#navbarPlaceholder").load("navbar_before_login.html")
      $("#footerPlaceholder").load("footer.html")
    }
  });
}
loadSkeleton(); //invoke the function

// function loadNav() {
//   $("#navbarPlaceholder").load("navbar_before_login.html");
//   $("#footerPlaceholder").load("footer.html");
// }
// //placeholder navbar/footer replacer until firebase is installed.
// loadNav();