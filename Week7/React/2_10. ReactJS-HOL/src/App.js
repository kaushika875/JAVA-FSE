import React from 'react';
import './App.css'; // Import the CSS for color styling
import officeImage from './office.jpg'; // Place your office image in src folder with this name

function App() {
  // Title
  const element = "Office Space";

  // Single office object
  const ItemName = { Name: "DBS", Rent: 50000, Address: "Chennai" };

  // List of office objects
  const officeList = [
    { Name: "DBS", Rent: 50000, Address: "Chennai" },
    { Name: "WeWork", Rent: 75000, Address: "Bangalore" },
    { Name: "Regus", Rent: 60000, Address: "Mumbai" },
    { Name: "IndiQube", Rent: 85000, Address: "Hyderabad" }
  ];

  // Function to determine rent color
  const getRentColor = (rent) => {
    return rent <= 60000 ? 'textRed' : 'textGreen';
  };

  return (
    <div>
      <h1>{element}, at Affordable Range</h1>

      {/* Image with JSX attributes */}
      <img src={officeImage} width="25%" height="25%" alt="Office Space" />

      <hr />

      {/* Office List Rendering */}
      {officeList.map((office, index) => (
        <div key={index}>
          <h2>Name: {office.Name}</h2>
          <h3 className={getRentColor(office.Rent)}>Rent: Rs. {office.Rent}</h3>
          <h3>Address: {office.Address}</h3>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
