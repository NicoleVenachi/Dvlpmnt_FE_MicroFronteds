import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";


import NotFound from "./pages/NotFound";

import { Navbar } from "navbar/Navbar";
import Loader from "./components/Loader";
import { lazy, Suspense } from "react";

// const App = () => (
//   <BrowserRouter>
//     <Navbar />
//     <div className="mt-10 text-3xl mx-auto max-w-6xl">
//       <div>Name: mf-navbar</div>
//       <div>Framework: react-19</div>
//     </div>
//   </BrowserRouter>
// );

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const CharactersPage = lazy(() => import("./pages/CharactersPage"));


const App = () => (
  <BrowserRouter>

    <Navbar />
    {/* <Loader /> */}
    <div className="container mx-20 mt-10">

      <Routes>
        <Route path="/" element={<Suspense fallback={<Loader />}> <HomePage /> </Suspense>} />
        <Route path="/about" element={<Suspense fallback={<Loader />}> <AboutPage /> </Suspense>} />
        <Route path="/characters" element={<Suspense fallback={<Loader />}> <CharactersPage /></Suspense>} />

        {/* Default routes */}
        {/* <Route path="*" element={<Navigate to={'/'} />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);