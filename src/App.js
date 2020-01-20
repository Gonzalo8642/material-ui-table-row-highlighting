import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StickyHeadTable from "./Table";
import Table2 from "./Table2";
import EnhancedTable from "./Table3";
function App() {
  return (
    <div className="App">
      <h1>
        Proof of concept that you can highlight table row in material UI without
        adding 200+ lines
      </h1>
      <h3>Table 2 is the winner</h3>
      <h1>Table 1. This is just a table, no highlighting</h1>
      <StickyHeadTable></StickyHeadTable>
      <h1>Table 2. Mo's Amazing (working) Table</h1>
      <Table2></Table2>
      <h1>Table 3. Works, but it's too much code</h1>
      <EnhancedTable></EnhancedTable>
    </div>
  );
}

export default App;
