import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Authentication } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/authentication" element={<Authentication />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
