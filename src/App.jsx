import React from "react";
import { Route } from "wouter";
import Logo from "./components/Logo";
import FormSearch from "./components/FormSearch";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Trending from "./components/Trending";
import Detail from "./pages/Detail";

function App() {
  return (
    <div className="w-full h-auto">
      <Logo />
      <FormSearch />
      <Route path="/" component={Home} />
      <Route path="/search/" component={Search} />
      <Route path="/search/:query" component={Search} />
      <Route path="/detail/" component={Detail} />
      <Route path="/detail/:gifID" component={Detail} />
      <Trending />
    </div>
  );
}

export default App;
