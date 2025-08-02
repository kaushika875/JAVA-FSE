import React, { useState } from 'react';

// Greeting for Guest
function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}

// Greeting for Logged-in User
function UserGreeting() {
  return <h1>Welcome back</h1>;
}

// Greeting decides which to show based on login state
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
}

// Login button
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

// Logout button
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

// Component to show flight details
function FlightDetails() {
  return (
    <div>
      <h3>✈️ Flight Details</h3>
      <ul>
        <li>Flight: AI202</li>
        <li>From: Delhi</li>
        <li>To: Mumbai</li>
        <li>Time: 6:30 PM</li>
      </ul>
    </div>
  );
}

// Component shown only to logged-in users
function BookTicket() {
  return (
    <div>
      <button style={{ backgroundColor: 'green', color: 'white' }}>Book Ticket</button>
    </div>
  );
}

// Main App
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  }

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  }

  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div style={{ margin: '20px' }}>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
      <hr />
      <FlightDetails />
      {isLoggedIn && <BookTicket />}
    </div>
  );
}

export default App;
