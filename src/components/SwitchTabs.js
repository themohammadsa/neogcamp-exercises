import React, { useState } from "react";

export const SwitchTabs = () => {
  const [tab, setTab] = useState(<Home />);

  function Home() {
    return <div>Welcome to the Home Page!</div>;
  }

  function About() {
    return <div>Welcome to the About Page! </div>;
  }
  function Profile() {
    return <div>Welcome to the Profile Page! </div>;
  }

  return (
    <div>
      <h1>Router </h1>
      <button className="ctr" onClick={() => setTab(<Home />)}>
        Home
      </button>
      <button className="ctr" onClick={() => setTab(<About />)}>
        About
      </button>
      <button className="ctr" onClick={() => setTab(<Profile />)}>
        Profile
      </button>
      <h2> {tab} </h2>
      <br />
      <br />
    </div>
  );
};
