import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Shop from "./components/Shop";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Route artinya renders out the compoenents based on the url
function App() {
  return (
    // we have ability to use routing
    <Router>
      <div className="App">
        {/* switch berfungsi untuk memberhentikan setiap route jika ketemu satu dan sesuai dengan url akan di berhentikan dan akan merender component tersebut yang match */}
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
        </Switch>
        {/* <About /> */}
        {/* <Shop /> */}
      </div>
    </Router>
  );
}

// const Home = () => {
//   <div>
//     <h1>home</h1>
//   </div>;
// };

export default App;
