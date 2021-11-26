import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Card from "./components/UI/Card";
import GlobalStyles from "./globalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/landing" element={<p>landing page</p>} />
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
      </ThemeProvider>
    </>
  );
};

export default App;
