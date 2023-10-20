import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Authentication, EmptyPage, Home, Otp, Search } from "./pages";
import { routes } from "./routes/routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.ROOT} element={<Home />} />
        <Route path={routes.AUTHENTICATION} element={<Authentication />} />
        <Route path={routes.SEARCH} element={<Search />} />
        <Route path={routes.REGISTER_OTP} element={<Otp length={6} />} />
        <Route path={routes.ABOUT_US} element={<EmptyPage />} />
        <Route path={routes.REGISTER_OTP} element={<EmptyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
