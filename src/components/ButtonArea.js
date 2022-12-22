import React from "react";
import { Button } from "./Button";

export const ButtonArea = () => {
  const buttonList = [
    {
      class: "box-AC",
      label: "AC",
    },
    {
      class: "pdm",
      label: "C",
    },
    {
      class: "box-percent",
      label: "%",
    },
    {
      class: "box-divide",
      label: "/",
    },
    {
      class: "box-7",
      label: "7",
    },
    {
      class: "box-8",
      label: "8",
    },
    {
      class: "box-9",
      label: "9",
    },
    {
      class: "box-x",
      label: "*",
    },
    {
      class: "box-4",
      label: "4",
    },
    {
      class: "box-5",
      label: "5",
    },
    {
      class: "box-6",
      label: "6",
    },
    {
      class: "box-minus",
      label: "-",
    },
    {
      class: "box-1",
      label: "1",
    },
    {
      class: "box-2",
      label: "2",
    },
    {
      class: "box-3",
      label: "3",
    },
    {
      class: "box-plus",
      label: "+",
    },
    {
      class: "box-zero",
      label: "0",
    },
    {
      class: "box-dot",
      label: ".",
    },
    {
      class: "box-equals",
      label: "=",
    },
  ];
  return (
    <>
      {buttonList.map((item, i) => {
        return (
          <Button
            key={i}
            className={"box " + item.class}
            label={item.label}
          ></Button>
        );
      })}
    </>
  );
};
