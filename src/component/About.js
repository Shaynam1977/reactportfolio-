import React from "react";
import { Parallax } from "react-parallax";
function About() {
  return (
    <div>
     <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={"https://pixelsandwanderlust.com/wp-content/uploads/2020/05/forest-landscape-photography-scaled.jpg"}
        bgImageAlt="the dog"
        strength={-200}
    >
        Blur transition from min to max
        <div style={{ height: '600px' }} />
    </Parallax>
    </div>
  );
}

export default About;