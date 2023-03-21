import React from "react";
import { Parallax } from "react-parallax";
function Resume() {
  return (
    <div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={"https://cdn.theatlantic.com/media/img/photo/2018/10/images-of-the-season-fall-is-in-the/f02_RTX6EJJJ-1/original.jpg"}
        bgImageAlt="the dog"
        strength={-200}
    >
        Blur transition from min to max
        <div style={{ height: '600px' }} />
    </Parallax>
    </div>
  );
}

export default Resume;