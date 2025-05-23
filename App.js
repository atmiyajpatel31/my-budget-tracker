import React, { useState } from "react";
import MappingTab from "./MappingTab";
import LogTab from "./LogTab";
import TrackerTab from "./TrackerTab";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tab, setTab] = useState("log");

  const handleLogin = (username, password) => {
    if (username === "atmiyajpatel" && password === "budget") {
      setIsLoggedIn(true);
    } else {
      alert("Incorrect credentials");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="login">
        <h2>Login</h2>
        <input id="username" placeholder="Username" />
        <input id="password" placeholder="Password" type="password" />
        <button onClick={() => {
          const u = document.getElementById("username").value;
          const p = document.getElementById("password").value;
          handleLogin(u, p);
        }}>Login</button>
      </div>
    );
  }

  return (
    <div className="app">
      <nav>
        <button onClick={() => setTab("mapping")}>Mapping</button>
        <button onClick={() => setTab("log")}>Income/Expense Log</button>
        <button onClick={() => setTab("tracker")}>Monthly Tracker</button>
      </nav>
      <div className="tab">
        {tab === "mapping" && <MappingTab />}
        {tab === "log" && <LogTab />}
        {tab === "tracker" && <TrackerTab />}
      </div>
    </div>
  );
}

export default App;
