import React from 'react';
import './App.css';
import {CssBaseline} from "@material-ui/core";
import {Header} from "./components/Header";
import {TimeLine} from "./components/TimeLine";

const App: React.FC = () => {
  return (
    <div>
      <CssBaseline />
      <Header/>
      <TimeLine />
    </div>
  );
};

export default App;
