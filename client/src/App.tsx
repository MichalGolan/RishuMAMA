import './App.css'
import React from "react";
import {UsersList} from "./components/UsersList";
import SidePanel from './components/side-panel/SidePanel';
import ResponsiveAppBar from './components/app-bar/App-bar';

export function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <SidePanel />
    </div>
  )
}
