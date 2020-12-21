import React, { useState, useEffect } from "react";
import getPlatformList from "./services/getPlatformList";
import GlobalStyle from "./theme/globalStyles.js";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import ProfileHead from "./components/ProfileHead.js";
import ProfilePlatforms from "./components/ProfilePlatforms.js";
import ProfileUploads from "./components/ProfileUploads.js";

function App() {
  const [platforms, setPlatforms] = useState([]);
  const [activePlatform, setActivePlatform] = useState({});

  useEffect(() => {
    async function doGet() {
      const platforms = await getPlatformList();
      setPlatforms(platforms);
    }
    doGet();
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <AppHeader />
      <ProfileHead activePlatform={activePlatform} />
      <ProfilePlatforms platforms={platforms} />
      <ProfileUploads />
      <AppFooter
        activePlatform={activePlatform}
        onChangeActivePlatform={setActivePlatform}
        platforms={platforms}
      />
    </div>
  );
}

export default App;
