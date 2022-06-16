import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ arrData, handlePlusClick, passedID }) => {
  const [isShown, setIsShown] = useState(false);

  function handleAddClick() {
    setIsShown(!isShown);
  }

  function handleMinusClick() {
    setIsShown(!isShown);
  }
  return (
    <article>
      {arrData.map((obj, index) => {
        const { id, title, info } = obj;
        return (
          <div className="question">
            <header>
              <h4>{title} </h4>
              <span className="btn">
                {!isShown ? (
                  <AiOutlinePlus
                    onClick={() => {
                      handleAddClick();
                      handlePlusClick(id);
                    }}
                  />
                ) : (
                  <AiOutlineMinus onClick={handleMinusClick} />
                )}
              </span>
            </header>
            {index === passedID && isShown ? <p>{info}</p> : null}
          </div>
        );
      })}
    </article>
  );
};

export default Question;
