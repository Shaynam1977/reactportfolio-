import React from "react";
import { Parallax } from "react-parallax";
function Contact() {
  return (
    <div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={"https://images.unsplash.com/photo-1624458168334-b40b7dd884cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG9jZWFuJTIwbGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"}
        bgImageAlt="the dog"
        strength={-200}
    >
        Blur transition from min to max
        <div style={{ height: '600px' }} />
    </Parallax>
    </div>
  );
}

export default Contact;