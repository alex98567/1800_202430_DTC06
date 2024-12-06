# Discover DTC

## 1. Project Description
State your app in a nutshell, or one-sentence pitch. Give some elaboration on what the core features are.  
Our application will provide detailed floor plans for the DTC as well as a full list of BCIT events that you can elect to receive notifications for by favoriting.

## 2. Names of Contributors
List team members and/or short bio's here... 
* Genevieve Glaim
* Alex Howe
* Gurman Pannu Github Username: XGurmanX
	
## 3. Technologies and Resources Used
List technologies (with version numbers), API's, icons, fonts, images, media or data sources, and other resources that were used.
* HTML, CSS, JavaScript
* Bootstrap 5.0 (Frontend library)
* Firebase 8.0 (BAAS - Backend as a Service)

## 4. Complete setup/installion/usage
State what a user needs to do when they come to your project.  How do others start using your code or application?
Here are the steps ...
* Launch the webpage
* Create an account/sign in

## 5. Known Bugs and Limitations
Here are some known bugs:
* notifications do not work.
* events aren't dynamically pulled from BCIT website
* can't search for specific rooms on the map


## 6. Features for Future
What we'd like to build in the future:
* Implement navigation from event location to the location on the map
* Implement working notifications
* Revamp website design to be more pleasing for users
* implement pulling events from BCIT website
	
## 7. Contents of Folder
Content of the project folder:

```
 Top level of project folder: 
├── .gitignore               # Git ignore file
├── account.html		# account page, where users can edit their information
├── BCIT_Events.json		# the mock event data
├── event.html			# the template for individual event pages
├── eventlist.html		# the page where all events are displayed
├── favorites.html		# the favorites page, where users can view favorited events
├── floor2.html			# floor 2 of the map pages
├── floor3.html			# floor 3 of the map pages
├── floor4.html			# floor 4 of the map pages
├── floor5.html			# floor 5 of the map pages
├── floor6.html			# floor 6 of the map pages
├── floor7.html 		# floor 7 of the map pags
├── floor8.html			# floor 8 of the map pages
├── home.html			# the home page for the user
├── index.html               # landing HTML file, this is what users see when you come to url
├── login.html			# the login/sign up page for users
├── map.html			# floor 1 of the map pages
├── README.md
└── settings.html		# the settings page, where users can configure notification settings


It has the following subfolders and files:
├── .git                     # Folder for git repo
├── images                   # Folder for images
    /BCIT_DTC_BGIMG.jpeg         # BCIT website, image for landing page
    /EventsIcon.svg         	# Figma, events icon on navbar
    /FavoritesIcon.svg          # Figma, favorites icon on navbar
    /Floor 1.png         # BCIT website, floorplan
    /Floor 2.png         # BCIT website, floorplan
    /Floor 3.png         # BCIT website, floorplan
    /Floor 4.png         # BCIT website, floorplan
    /Floor 5.png         # BCIT website, floorplan
    /Floor 6.png         # BCIT website, floorplan
    /Floor 7.png         # BCIT website, floorplan
    /Floor 8.png         # BCIT website, floorplan
    /HomeIcon.svg          # Figma, home icon on navbar
    /MapsIcon.svg          # Figma, map icon on navbar

├── scripts                  # Folder for scripts
    /account.js                 # the javascript for the accounts page
    /authentication.js          # the javascript for authenticating users
    /eachEvent.js               # the javascript for populating/creating individual event pages
    /eventList.js       # the javascript for populating the event list with all available events
    /favorites.js               # the javascript for displaying favorites/removinging favorites
    /floors.js                  # the javascript used to manage the floor dropdown
    /homeboxes.js            # the javascript used to populate the event boxes on the home page
    /script.js                  # script that allows users to sign out
    /settings.js                # script that manages user settings
    /skeleton.js                # script that inserts the navbar/footer on every page
    /welcome.js                 # script that adds personalized welcome message to home page
    /zoom.js                    # script that allows for zooming on the map pages
├── styles                   # Folder for styles
    /style.css               # all the styling for the web app
├── text
    /footer.html	     # Template for the footer
    /navbar_after_login.html # top navbar for after users have logged in
    /navbar_before_login     # top navbar for the landing page




```


