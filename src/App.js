import React from "react";

import GlobalStyle from "./theme/globalStyles.js";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <div></div>
      <nav>
        <div>UPLOAD</div>
        <div>STATUS</div>
        <div></div>
      </nav>
    </div>
  );
}

export default App;
