import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import LoginModal from "./components/LoginModal/LoginModal";
import SignupModal from "./components/SignupModal/SignupModal";
import Home from "./pages/Home/Home";
import Landing from "./pages/Landing/Landing";
import Card from "./components/UI/Card";
import GlobalStyles from "./globalStyles";
import theme from "./theme";
import Topbar from "./components/Topbar/Topbar";

const App = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [SignupModalOpen, setSignupModalOpen] = useState(false);

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
          <Topbar onLoginClick={() => setLoginModalOpen(true)} />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/landing" element={<Landing />} />
            <Route
              path="/week"
              element={
                <Card>
                  <p>week page</p>
                </Card>
              }
            />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
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
