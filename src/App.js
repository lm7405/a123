import React, { useState } from "react";
import "./styles.css";
import Spreadsheet from "./Spreadsheet";
import exampleData from "./exampleData";

export default function App() {
  const [read, setRead] = useState(false);
  return (
    <div style={{ height: "100vh" }}>
      <button onClick={() => setRead(!read)}>toggle mode</button>
      <Spreadsheet
        height="80%"
        data={exampleData}
        options={
          read && {
            mode: "read",
            showToolbar: false,
            showGrid: false,
            showContextmenu: false
          }
        }
      />
      <br />
    </div>
  );
}
