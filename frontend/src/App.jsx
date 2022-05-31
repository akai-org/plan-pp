import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useMediaPredicate } from "react-media-hook";

import LoginModal from "./components/LoginModal/LoginModal";
import SignupModal from "./components/SignupModal/SignupModal";
import Home from "./pages/Home/Home";
import Landing from "./pages/Landing/Landing";
import Week from "./pages/Week/Week";
import GlobalStyles from "./globalStyles";
import theme from "./theme";
import Topbar from "./components/Topbar/Topbar";
import MobileBar from "./components/MobileBar/MobileBar";

const App = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [SignupModalOpen, setSignupModalOpen] = useState(false);
  const underSmallSize = useMediaPredicate("(max-width: 600px)");

  const switchModalType = () => {
    if (loginModalOpen) {
      setLoginModalOpen(false);
      setSignupModalOpen(true);
    } else if (SignupModalOpen) {
      setLoginModalOpen(true);
      setSignupModalOpen(false);
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Topbar onLoginClick={() => setLoginModalOpen(true)} loggedIn />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/week" element={<Week />} />
            <Route path="/settings" element={<p>Ustawiena konta</p>} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
          {underSmallSize && (
            <MobileBar onLoginClick={() => setLoginModalOpen(true)} loggedIn />
          )}
        </BrowserRouter>
        <LoginModal
          open={loginModalOpen}
          onSwitchType={switchModalType}
          onClose={() => setLoginModalOpen(false)}
        />
        <SignupModal
          open={SignupModalOpen}
          onSwitchType={switchModalType}
          onClose={() => setSignupModalOpen(false)}
        />
      </ThemeProvider>
    </>
  );
};

export default App;
