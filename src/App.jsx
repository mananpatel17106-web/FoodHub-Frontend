import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Success from "./pages/Success";
import Error from "./pages/Error";
import Wishlist from "./pages/Wishlist";

import Protectedroute from "./components/Protectedroute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Wishlist */}
        <Route path="/wishlist" element={<Wishlist />} />

        {/* Success */}
        <Route
          path="/success"
          element={<Protectedroute element={<Success />} />}
        />

        {/* 404 */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;