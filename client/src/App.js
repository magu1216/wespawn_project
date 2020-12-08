import React from "react";

import GlobalStyle from "./theme/globalStyles.js";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import ProfileHead from "./components/ProfileHead.js";
import ProfilePlatforms from "./components/ProfilePlatforms.js";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AppHeader />
      <ProfileHead />
      <ProfilePlatforms />
      <AppFooter />
    </div>
  );
}

export default App;
