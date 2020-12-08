import React from "react";

import GlobalStyle from "./theme/globalStyles.js";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import ProfileBody from "./components/ProfileBody.js";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AppHeader />
      <ProfileBody />
      <AppFooter />
    </div>
  );
}

export default App;
