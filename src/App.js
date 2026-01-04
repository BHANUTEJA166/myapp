// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "./App.css";
// import { createContext, useState } from "react";
// import { Provider } from "react-redux";
// import Header from "./I phone/Header";
// import Router from "./I phone/Routing";
// import Footer from "./I phone/Footer";
// import { store } from "./Redux/Store";
// import HeaderF from "./Fitzen/HeaderF";
// import RoutersF from "./Fitzen/RoutesF";
// import FooterF from "./Fitzen/FooterF"
// import FooterFP from "./Fitzen/Fitzen(Practise)/FooterFP";
// import HeaderFP from "./Fitzen/Fitzen(Practise)/HeaderFP";
// import RoutesFP from "./Fitzen/Fitzen(Practise)/RoutesFP";


// export const loginData = createContext();
// export const loginFData = createContext();

// function App() {
//  const[loginF, setloginF] = useState(false)

//   return (
//     <Provider store={store}>
//       <loginFData.Provider value={[loginF, setloginF]}>
//         <main className="container-fluid p-0">
//           <HeaderFP />
//           <RoutesFP/>
//           <FooterFP />
//         </main>
//         </loginFData.Provider>
//     </Provider>
//   );
// }

// export default App;









// npx json-server fitzen.json -p 5000













































import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';
import { createContext, useState } from "react";
import Header from "./I phone/Header"
import Router from "./I phone/Routing"
import Footer from "./I phone/Footer";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";

export const loginData = createContext();

function App() {
  const [login, setLogin] = useState(false);

  return (
    <loginData.Provider value={[login, setLogin]}>
      <Provider store={store}>
        <main className="container-fluid p-0">
          <Header />
          <Router />
          <Footer />
        </main>
      </Provider>
    </loginData.Provider>
  );
}

export default App;

