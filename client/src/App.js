import React, { useState } from "react";

import GlobalStyle from "./theme/globalStyles.js";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import ProfileHead from "./components/ProfileHead.js";
import ProfilePlatforms from "./components/ProfilePlatforms.js";
import ProfileUploads from "./components/ProfileUploads.js";

function App() {
  const [activePlatform, setActivePlatform] = useState({});

  return (
    <div className="App">
      <GlobalStyle />
      <AppHeader />
      <ProfileHead activePlatform={activePlatform} />
      <ProfilePlatforms />
      <ProfileUploads />
      <AppFooter
        activePlatform={activePlatform}
        onChangeActivePlatform={setActivePlatform}
      />
    </div>
  );
}

export default App;
