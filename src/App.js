//import logo from './logo.svg';
import React from "react";
//import './App.css';
import Profile from "./Components/Profile";
import Button from "./Components/Button";
import Social from "./Components/Social";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Profile />
        <Button id="twitter" link="https://twitter.com/TheRighteous8">
          Twitter Link
        </Button>
        <Button id="btn_zuri" link="https://training.zuri.team/">
          Zuri Team
        </Button>
        <Button id="books" link="http://books.zuri.team">
          Zuri Books
        </Button>
        <Button id="book_python" link="https://books.zuri.team">
          Python Books
        </Button>
        <Button id="pitch" link="https://background.zuri.team">
          Twitter Link
        </Button>
        <Button id="book_design" link="https://books.zuri.team/design-rules">
          Design Books
        </Button>
        <Social />
      </div>
      <Footer />
    </div>
  );
}

export default App;
