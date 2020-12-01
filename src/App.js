import React from "react";

import GlobalStyle from "./theme/globalStyles.js";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AppHeader />
      <div>Picture</div>
      <div>Username + Info</div>
      <div>Platforms</div>
      <div>Uploads</div>
      <AppFooter />
    </div>
  );
}

export default App;
