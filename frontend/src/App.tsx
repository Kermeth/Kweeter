import React from 'react';
import './App.css';
import {CssBaseline} from "@material-ui/core";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div>
      <CssBaseline />
      <Header/>
    </div>
  );
};

export default App;
