import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Components/Layout.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Usercon from "./Components/Usercon.jsx";
import Github from "./Components/Github.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children: [
//       {
//         path:"/",
//         element: <Home/>
//       },
//       {
//         path:"/About",
//         element: <About />
//       },
//       {
//         path:"/Contactus",
//         element: <Contact />
//       },
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="Aboutus" element={<About />} />
      <Route path="/Contactus" element={<Contact />} />
      <Route path="/Github" element={<Github />} />
      <Route path="/Github/:userid" element={<Github />} />
      <Route path="/Github" element={<Github />} />
      <Route 
      path="/Usercon/:userid"
      
      element={<Usercon />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
