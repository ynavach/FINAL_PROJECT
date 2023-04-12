import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";

import Gallery from "./pages/gallery.jsx";
import Services from "./pages/services.jsx";
import { Home } from "./pages/home.jsx";
import { Signup } from "./pages/signup.jsx";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { LoginPage } from "./pages/login.jsx";
import { My_Account } from "./pages/myAccount.jsx";
import { PrivateProfile } from "./pages/privateProfile.jsx";
import { About } from "./pages/about.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Signup />} path="/signup" />
            <Route element={<My_Account />} path="/my_account" />
            <Route element={<Services />} path="/services" />
            <Route element={<About />} path="//about" />
            <Route element={<Gallery />} path="/gallery" />
            <Route element={<LoginPage />} path="/login" />
            <Route element={<h1>Not found!</h1>} /> path="*"
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
