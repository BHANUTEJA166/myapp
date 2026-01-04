import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './Hero';
import About from './About';
import Performance from './Performance';
import Pricing from './Pricing';
import Contact from './Contact';
import NoPage from './NoPage';
import Features from './Features';
import Accessories from './Accessories';
import Reviews from './Reviews';
import AdminLogin from './Admin/AdminLogin';
import Dashboard from './Admin/Dashboard';
import Welcome from './Admin/Welcome';
import Addfeatures from './Admin/Addfeatures';
import Viewfeatures from './Admin/Viewfeatures';
import Addaccessories from './Admin/Addaccessories';
import Viewaccessories from './Admin/Viewaccessories';
import Addreviews from './Admin/Addreviews';
import Viewreviews from './Admin/Viewreviews';
import FeatureDetails from './FeatureDetails';
import ViewEnquiries from './Admin/ViewEnquiries';

const Routing = () => (
  <Routes>
    <Route path="/"                element={<Hero />} />
    <Route path="/about"           element={<About />} />
    <Route path="/performance"     element={<Performance />} />
    <Route path="/pricing"         element={<Pricing />} />
    <Route path="/contact"         element={<Contact />} />
    <Route path="/features"        element={<Features />} />
    <Route path="/featureDetails/:id" element={<FeatureDetails />} />
    <Route path="/accessories"     element={<Accessories />} />
    <Route path="/reviews"         element={<Reviews />} />
    <Route path="/admin"           element={<AdminLogin />} />
    <Route path="/dashboard"       element={<Dashboard />}>
      <Route index               element={<Welcome />} />
      <Route path="addfeatures"  element={<Addfeatures />} />
      <Route path="viewfeatures" element={<Viewfeatures />} />
      <Route path="addaccessories"  element={<Addaccessories />} />
      <Route path="viewaccessories" element={<Viewaccessories />} />
      <Route path="addreviews"      element={<Addreviews />} />
      <Route path="viewreviews"     element={<Viewreviews />} />
      <Route path="viewenquires"   element={< ViewEnquiries/>} />
    </Route>
    <Route path="*" element={<NoPage />} />
  </Routes>
);

export default Routing;














































// import React from "react";
// import { Route, Routes } from 'react-router-dom'
// import Hero from "./Hero";
// import About from "./About";
// import Performance from "./Performance";
// import Pricing from "./Pricing";
// import Contact from "./Contact";
// import NoPage from "./NoPage";
// import Features from "./Features";
// import Accessories from "./Accessories";
// import Reviews from "./Reviews";
// import AdminLogin from "./Admin/AdminLogin";
// import Dashboard from "./Admin/Dashboard";
// import Header from "./Header";
// import Footer from "./Footer";
// import Welcome from "./Admin/Welcome";
// import Addfeatures from "./Admin/Addfeatures";
// import Viewfeatures from "./Admin/Viewfeatures";
// import Addaccessories from "./Admin/Addaccessories";
// import Viewaccessories from "./Admin/Viewaccessories";
// import Addreviews from "./Admin/Addreviews";
// import Viewreviews from "./Admin/Viewreviews";
// import FeatureDetails from "./FeatureDetails"

// const Routing = () => {
//   return (
//     <Routes>
//       <Route path="/" Component={Hero } />
//       <Route path="/about" Component={About } />
//       <Route path="/header" Component={Header } />
//       <Route path="/footer" Component={Footer } />
//       <Route path="/performance" Component={Performance } />
//       <Route path="/pricing" Component={ Pricing } />
//       <Route path="/contact" Component={Contact } />
//       <Route path="/features" Component={Features } />
//       <Route path="/featureDetails/:id" element={<FeatureDetails />} />

//       <Route path="/accessories" Component={Accessories } />
//       <Route path="/reviews" Component={Reviews } />
//       <Route path="/admin" Component={AdminLogin } />
//       <Route path="/dashboard" Component={Dashboard } >
//         <Route path='' Component={Welcome} />
//         <Route path='addfeatures' Component={Addfeatures} />
//         <Route path='viewfeatures' Component={Viewfeatures} />
//         <Route path='addaccessories' Component={Addaccessories} />
//         <Route path='viewaccessories' Component={Viewaccessories} />
//         <Route path='addreviews' Component={Addreviews} />
//         <Route path='viewreviews' Component={Viewreviews} />
//       </Route>
//         <Route path="*" Component={NoPage } />
//     </Routes>
//   );
// }

// export default Routing;