// function writeEvents() {
//     // Reference the 'Events' collection
//     const eventsRef = db.collection("Events");

//     // Add multiple event documents
//     eventsRef.add({
//         id: "event1",
//         name: "1-on-1 English Help Drop-in (Downtown)",
//         description: "Need help with your English? English Language Support (ELS) at BCIT provides FREE services for students who need extra help with their English language skills. We are now offering in-person, drop-in (no appointment) 1-on-1 sessions at the downtown campus, Mondays and Wednesdays in Room 305 between 5-6pm. ELS instructors and tutors can help you with: written assignments, presentations, conversational confidence, communication for the workplace, understanding instructions and course expectations, pronunciation, and much more! We offer online and in-person sessions. Sessions fill up quickly!",
//         type: "Informative",
//         date: "2024-11-18",
//         time: "5:00 PM - 6:00 PM",
//         register: "No",
//         location: "BCIT Downtown Campus, Room 280",
//         organizer: "BCIT Student Services",
//         contact: "student_services@bcit.ca",
//         link: "https://www.bcit.ca/event/1-on-1-english-help-drop-in-downtown-2024-11-19/",
//         last_updated: firebase.firestore.FieldValue.serverTimestamp()
//     });

//     eventsRef.add({
//         id: "event2",
//         name: "Flexible Learning Operations Management – In-Person Info Session",
//         description: "Ready to put your attention to detail and strong organizational skills to work? Operations Management explores how business enterprises supply, produce, and distribute goods and services to domestic and international markets. You will plan and control product inventory, maintain quality assurance systems, and use project management tools and techniques to deliver projects on time and budget.",
//         type: "Informative",
//         date: "2024-11-19",
//         time: "5:00 PM - 7:00 PM",
//         register: "Yes",
//         location: "BCIT Downtown Campus, Room 282",
//         organizer: "BCIT School of Business + Media",
//         contact: "business_media@bcit.ca",
//         link: "https://www.bcit.ca/event/flexible-learning-operations-management-in-person-info-session/",
//         last_updated: firebase.firestore.FieldValue.serverTimestamp()
//     });

//     eventsRef.add({
//         id: "event3",
//         name: "English Conversation Cafe",
//         description: "Connect, socialize, and meet people from around the world! This is an opportunity for newcomers to learn about Canadian culture and practice speaking English in a fun, informal, and supportive environment. Open to all international and domestic students enrolled in BCIT courses.",
//         type: "Social",
//         date: "2024-11-27",
//         time: "1:00 PM - 2:00 PM",
//         register: "Yes",
//         location: "BCIT Downtown Campus, Room 794",
//         organizer: "International Student Centre",
//         contact: "isc_info@bcit.ca",
//         link: "https://www.bcit.ca/event/english-conversation-cafe/",
//         last_updated: firebase.firestore.FieldValue.serverTimestamp()
//     });

//     eventsRef.add({
//         id: "event4",
//         name: "1-on-1 English Help Drop-in (Downtown)",
//         description: "Need help with your English? English Language Support (ELS) at BCIT provides FREE services for students who need extra help with their English language skills. We are now offering in-person, drop-in (no appointment) 1-on-1 sessions at the downtown campus, Mondays and Wednesdays in Room 305 between 5-6pm. ELS instructors and tutors can help you with: written assignments, presentations, conversational confidence, communication for the workplace, understanding instructions and course expectations, pronunciation, and much more! We offer online and in-person sessions. Sessions fill up quickly!",
//         type: "Informative",
//         date: "2024-11-25",
//         time: "5:00 PM - 6:00 PM",
//         register: "No",
//         location: "BCIT Downtown Campus, Room 280",
//         organizer: "BCIT Student Services",
//         contact: "student_services@bcit.ca",
//         link: "https://www.bcit.ca/event/1-on-1-english-help-drop-in-downtown-14/",
//         last_updated: firebase.firestore.FieldValue.serverTimestamp()
//     });

//     eventsRef.add({
//         id: "event5",
//         name: "English Conversation Cafe",
//         description: "Connect, socialize, and meet people from around the world! This is an opportunity for newcomers to learn about Canadian culture and practice speaking English in a fun, informal, and supportive environment. Open to all international and domestic students enrolled in BCIT courses.",
//         type: "Social",
//         date: "2024-11-27",
//         time: "1:00 PM - 2:00 PM",
//         register: "Yes",
//         location: "BCIT Downtown Campus, Room 794",
//         organizer: "International Student Centre",
//         contact: "isc_info@bcit.ca",
//         link: "https://www.bcit.ca/event/english-conversation-cafe/",
//         last_updated: firebase.firestore.FieldValue.serverTimestamp()
//     });

//     eventsRef.add({
//         id: "event6",
//         name: "Future Forward: Tech Panel and Networking",
//         description: "Join us for an insightful event designed to help BCIT students and alumni thrive in the rapidly evolving tech industry. Our expert panelists will share valuable tips on essential skills, career growth strategies, and job search techniques. Plus, you’ll have the chance to network with industry professionals in specialized group networking sessions, building connections that can help advance your job search or career.",
//         type: "Informative",
//         date: "2024-11-27",
//         time: "5:00 PM - 7:00 PM",
//         register: "Yes",
//         location: "BCIT Downtown Campus, Tech Collider",
//         organizer: "BCIT Student Association",
//         contact: "604.432.8600",
//         link: "https://www.bcitsa.ca/careerservices/event/future-forward-tech-panel-and-networking-night-nov-27-downtown-campus/",
//         last_updated: firebase.firestore.FieldValue.serverTimestamp()
//     });

//     eventsRef.add({
//         id: "event7",
//         name: "1-on-1 English Help Drop-in (Downtown)",
//         description: "Need help with your English? English Language Support (ELS) at BCIT provides FREE services for students who need extra help with their English language skills. We are now offering in-person, drop-in (no appointment) 1-on-1 sessions at the downtown campus, Mondays and Wednesdays in Room 305 between 5-6pm. ELS instructors and tutors can help you with: written assignments, presentations, conversational confidence, communication for the workplace, understanding instructions and course expectations, pronunciation, and much more! We offer online and in-person sessions. Sessions fill up quickly!",
//         type: "Informative",
//         date: "2024-11-27",
//         time: "5:00 PM - 6:00 PM",
//         register: "No",
//         location: "BCIT Downtown Campus, Room 305",
//         organizer: "International Student Centre",
//         contact: "isc_info@bcit.ca",
//         link: "https://www.bcit.ca/event/1-on-1-english-help-drop-in-downtown-15/",    
//         last_updated: firebase.firestore.FieldValue.serverTimestamp()
//     });

//     eventsRef.add({
//         id: "event8",
//         name: "1-on-1 English Help Drop-in (Downtown)",
//         description: "Need help with your English? English Language Support (ELS) at BCIT provides FREE services for students who need extra help with their English language skills. We are now offering in-person, drop-in (no appointment) 1-on-1 sessions at the downtown campus, Mondays and Wednesdays in Room 305 between 5-6pm. ELS instructors and tutors can help you with: written assignments, presentations, conversational confidence, communication for the workplace, understanding instructions and course expectations, pronunciation, and much more! We offer online and in-person sessions. Sessions fill up quickly!",
//         type: "Informative",
//         date: "2024-12-02",
//         time: "5:00 PM - 6:00 PM",
//         register: "No",
//         location: "BCIT Downtown Campus, Room 305",
//         organizer: "International Student Centre",
//         contact: "isc_info@bcit.ca",
//         link: "https://www.bcit.ca/event/1-on-1-english-help-drop-in-downtown-16/",
//         last_updated: firebase.firestore.FieldValue.serverTimestamp()
//     });

//     eventsRef.add({
//         id: "event9",
//         name: "1-on-1 English Help Drop-in (Downtown)",
//         description: "Need help with your English? English Language Support (ELS) at BCIT provides FREE services for students who need extra help with their English language skills. We are now offering in-person, drop-in (no appointment) 1-on-1 sessions at the downtown campus, Mondays and Wednesdays in Room 305 between 5-6pm. ELS instructors and tutors can help you with: written assignments, presentations, conversational confidence, communication for the workplace, understanding instructions and course expectations, pronunciation, and much more! We offer online and in-person sessions. Sessions fill up quickly!",
//         type: "Informative",
//         date: "2024-12-04",
//         time: "5:00 PM - 6:00 PM",
//         register: "No",
//         location: "BCIT Downtown Campus, Room 305",
//         organizer: "International Student Centre",
//         contact: "isc_info@bcit.ca",
//         link: "https://www.bcit.ca/event/1-on-1-english-help-drop-in-downtown-17/",    
//         last_updated: firebase.firestore.FieldValue.serverTimestamp()
//     });

//     eventsRef.add({
//         id: "event10",
//         name: "1-on-1 English Help Drop-in (Downtown)",
//         description: "Need help with your English? English Language Support (ELS) at BCIT provides FREE services for students who need extra help with their English language skills. We are now offering in-person, drop-in (no appointment) 1-on-1 sessions at the downtown campus, Mondays and Wednesdays in Room 305 between 5-6pm. ELS instructors and tutors can help you with: written assignments, presentations, conversational confidence, communication for the workplace, understanding instructions and course expectations, pronunciation, and much more! We offer online and in-person sessions. Sessions fill up quickly!",
//         type: "Informative",
//         date: "2024-12-09",
//         time: "5:00 PM - 6:00 PM",
//         register: "No",
//         location: "BCIT Downtown Campus, Room 305",
//         organizer: "International Student Centre",
//         contact: "isc_info@bcit.ca",
//         link: "https://www.bcit.ca/event/1-on-1-english-help-drop-in-downtown-18/",    
//         last_updated: firebase.firestore.FieldValue.serverTimestamp()
//     });

//     eventsRef.add({
//         id: "event11",
//         name: "1-on-1 English Help Drop-in (Downtown)",
//         description: "Need help with your English? English Language Support (ELS) at BCIT provides FREE services for students who need extra help with their English language skills. We are now offering in-person, drop-in (no appointment) 1-on-1 sessions at the downtown campus, Mondays and Wednesdays in Room 305 between 5-6pm. ELS instructors and tutors can help you with: written assignments, presentations, conversational confidence, communication for the workplace, understanding instructions and course expectations, pronunciation, and much more! We offer online and in-person sessions. Sessions fill up quickly!",
//         type: "Informative",
//         date: "2024-12-11",
//         time: "5:00 PM - 6:00 PM",
//         register: "No",
//         location: "BCIT Downtown Campus, Room 305",
//         organizer: "International Student Centre",
//         contact: "isc_info@bcit.ca",
//         link: "https://www.bcit.ca/event/1-on-1-english-help-drop-in-downtown-19/",    
//         last_updated: firebase.firestore.FieldValue.serverTimestamp()
//     });

//     eventsRef.add({
//         id: "event3",
//         name: "English Conversation Cafe",
//         description: "Connect, socialize, and meet people from around the world! This is an opportunity for newcomers to learn about Canadian culture and practice speaking English in a fun, informal, and supportive environment. Open to all international and domestic students enrolled in BCIT courses.",
//         type: "Social",
//         date: "2024-11-27",
//         time: "1:00 PM - 2:00 PM",
//         register: "Yes",
//         location: "BCIT Downtown Campus, Room 794",
//         organizer: "International Student Centre",
//         contact: "isc_info@bcit.ca",
//         link: "https://www.bcit.ca/event/english-conversation-cafe/",
//         last_updated: firebase.firestore.FieldValue.serverTimestamp()
//     });

//     eventsRef.add({
//         id: "event3",
//         name: "English Conversation Cafe",
//         description: "Connect, socialize, and meet people from around the world! This is an opportunity for newcomers to learn about Canadian culture and practice speaking English in a fun, informal, and supportive environment. Open to all international and domestic students enrolled in BCIT courses.",
//         type: "Social",
//         date: "2024-11-27",
//         time: "1:00 PM - 2:00 PM",
//         register: "Yes",
//         location: "BCIT Downtown Campus, Room 794",
//         organizer: "International Student Centre",
//         contact: "isc_info@bcit.ca",
//         link: "https://www.bcit.ca/event/english-conversation-cafe/",
//         last_updated: firebase.firestore.FieldValue.serverTimestamp()
//     });

//     console.log("Events added to Firestore!");
// }
