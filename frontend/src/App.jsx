// import Home from './pages/Home'
// import AboutUs from './pages/AboutUs'
// function App() {
//   return (
//     <>
//       <Home />
//       <AboutUs />
//     </>
//   )
// }

// export default App




// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import AboutUs from "./pages/AboutUs";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/AboutUs" element={<AboutUs />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;




import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

function Layout() {
  return (
    <>
      <Home />
      <AboutUs />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main page: Home + AboutUs */}
        <Route path="/" element={<Layout />} />

        {/* Separate About page (optional) */}
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
