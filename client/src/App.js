// ===== IMPORTS =====
import React from "react"

function App() {
  return (
    <div className="app">
      <h1>Welcome to my first Heroku deployment!</h1>
      <div className="instructions">
        <h3>Here are the URL paths for the API</h3>
        <p>[GET] - /api/users</p>
        <p>[POST] - /api/register</p>
        <p>[POST] - /api/login</p>
      </div>
    </div>
  );
}

export default App;
