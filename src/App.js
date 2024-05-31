import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Result from "./Components/Result";
import Body from "./Components/Body";

function App() {
  const NameList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [totalMatch, setTotalMatch] = useState(0);
  const [result, setResult] = useState([]);
  const check = (name) => {
    let newResult = [];
    let newTotalMatch = 0;
    let count = 0;
    NameList.map((n) => {
      if (n.toLowerCase().includes(name.toLowerCase())) {
        newTotalMatch++;
        newResult.push(n);
      }
    });
    setResult(newResult);
    setTotalMatch(newTotalMatch);
  };

  return (
    <>
      <Header />
      <main className="container">
        <Body check={check} />
      </main>
      <Result result={result} totalMatch={totalMatch} />
    </>
  );
}

export default App;
