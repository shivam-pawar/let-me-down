import React from "react";

export interface LetMeDownProps {
  label: string;
}

function LetMeDown(props: LetMeDownProps) {
  return <div>LetMeDown - {props.label}</div>;
}

export default LetMeDown;
