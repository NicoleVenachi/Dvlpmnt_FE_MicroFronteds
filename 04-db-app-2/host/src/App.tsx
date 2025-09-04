import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CharactersPage from "./pages/CharactersPage";
import NotFound from "./pages/NotFound";

import { Navbar } from "navbar/Navbar";

// const App = () => (
//   <BrowserRouter>
//     <Navbar />
//     <div className="mt-10 text-3xl mx-auto max-w-6xl">
//       <div>Name: mf-navbar</div>
//       <div>Framework: react-19</div>
//     </div>
//   </BrowserRouter>
// );


const App = () => (
  <BrowserRouter>

    <Navbar />
    <div className="container mx-20 mt-10">

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/characters" element={<CharactersPage />} />

        {/* Default routes */}
        <Route path="*" element={<Navigate to={'/'} />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);