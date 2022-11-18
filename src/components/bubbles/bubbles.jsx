import React from "react";
import StylesBubbles from "./bubbles.module.css";
import redBall from "../../images/red_ball.svg";
import purpleBall from "../../images/purple_ball.svg";
import purpleLight from "../../images/purple_light.svg";
import redLight from "../../images/red_light.svg";

export function Bubbles() {
  return (
    <div>
      <img
        className={`${StylesBubbles.redBall_big}`}
        src={redBall}
        alt="красный шар"
      />
      <img
        className={`${StylesBubbles.redBall_min}`}
        src={redBall}
        alt="красный шар"
      />
      <img
        className={`${StylesBubbles.purpleBall}`}
        src={purpleBall}
        alt="сиреневый шар"
      />
      <img
        className={`${StylesBubbles.purpleLight}`}
        src={purpleLight}
        alt="сиреневый свет"
      />
      <img
        className={`${StylesBubbles.redLight}`}
        src={redLight}
        alt="красный свет"
      />
    </div>
  );
}
