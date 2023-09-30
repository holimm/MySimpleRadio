import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home.tsx";
import MusicStreamer from "./musicstreamer.tsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/MySimpleRadio" element={<Home />}></Route>
          <Route
            path="/MySimpleRadio/MusicStreamer"
            element={<MusicStreamer />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
