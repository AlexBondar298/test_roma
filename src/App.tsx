import React from "react";

import "./scss/globals.scss";
import "./scss/button.scss";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div className="body">
      <Header />
      <Main />
    </div>
  );
};

export default App;
