import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoardPage from "../BoardPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BoardPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
