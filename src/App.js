import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [myNum, setMyNum] = useState();
  function handlePlusClick(id) {
    let myNewID = id - 1;
    setMyNum(myNewID);
    console.log(myNewID);

    // setIsShown(!isShown);
  }
  return (
    <main>
      <section className="container">
        <h3>Questions And Answers About Login</h3>
        <SingleQuestion
          arrData={data}
          handlePlusClick={handlePlusClick}
          passedID={myNum}
        />
      </section>
    </main>
  );
}

export default App;
