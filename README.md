# Minimalist React Interface — API Display Project

This project is a minimalist React-based UI . The goal was to replicate a clean interface and display external API data clearly and effectively.

-  Minimalist and clean UI using React + Tailwind CSS
-  Navigation bar with clear routing between pages
-  Welcome page as the main landing view
-  Table view to display API data 

- The **navbar** contains:
  - Navigation to the API-powered table
  - A clickable logo that redirects to the Welcome page

- The **table page**:
  - Fetches all data from the provided API
  - Displays the data in a table

 Technologies used

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)


To test it:
- Clone the repo
- cd mashroomapp
- npm install
- npm run dev
Then go to: http://localhost:5173

📁 Folder Structure
<pre> 
```
src/
├── components/
│   └── Navbar.jsx
│   └── Dropdown.jsx
│   └── Welcome.jsx
│   └── WelcomeCard.jsx
├── pages/
│   └── ApiPage.jsx
├── App.css
├── App.jsx
├── index.css
└── main.jsx
``` </pre>
