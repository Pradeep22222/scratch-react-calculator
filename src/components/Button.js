import React, { useState } from "react";

export const Button = ({ className, label, handleOnClick }) => {
  const [buttonLabel, setButtonLabel] = useState("");
    const handleOnButtonClick = (e) => {
      console.log(e)
      const { value } = e.target;
      setButtonLabel(value);
      handleOnClick(buttonLabel)
  };
  return (
    <>
      <div className={className} onClick={handleOnButtonClick}>
        {label}
      </div>
    </>
  );
};
