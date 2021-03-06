import { riskMarks } from "../../constants";
import { Slider } from "antd";
import React from "react";
import "./style.less";

export const RiskSlider = (props: { value: number }) => {
  return (
    <Slider
      className="risk-slider"
      marks={riskMarks}
      value={props.value}
      included={false}
    />
  );
};
