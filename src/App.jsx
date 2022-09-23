import React from "react";
import { Route } from "wouter";
import Logo from "./components/Logo";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import GifsProvider from "./context/GifsProvider";
//import Footer from "./components/Footer";
import FormSearch from "./components/FormSearch";

function App() {
  return (
    <div className="w-full h-auto">
      <Logo />
      <FormSearch />
      <GifsProvider>
        <Route path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/search/:query" component={Search} />
        <Route path="/detail" component={Detail} />
        <Route path="/detail/:gifID" component={Detail} />
      </GifsProvider>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
