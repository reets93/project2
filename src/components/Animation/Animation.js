import React from "react";
import DrawSVG from "react-svg-drawing";
// import anime from "animejs/lib/anime.es.js";
import "../Animation/Animation.css";

export default function Animation() {
  return (
    <div className="animation">
      <DrawSVG
        strokeWidth="5"
        loop={true}
        direction="alternate"
        easing="easeInOutQuad"
        duration="5000"
      >
      <svg
   viewBox="0 300 2400 500" width="1900" height="400"
   style={{
     fill: "none",
     stroke: "blue",
     // width: "700",
     // height: "1000",
   }}
        >
          <path d="M416.8,512.041V655.748q0,39.6,20.752,64.5a84.868,84.868,0,0,0,30.35,22.827,89.529,89.529,0,0,0,37.786,8.474q38.561,0,65.022-25.94T597.164,661.8q0-37.005-26.026-63.294t-62.515-26.286q-5.882,0-17.294,1.038v71.248q9.165-6.225,16.256-6.225a22.639,22.639,0,0,1,16.947,7.176,24.567,24.567,0,0,1,6.918,17.726,23.392,23.392,0,0,1-7.35,17.38,24.666,24.666,0,0,1-17.9,7.177q-24.732,0-24.729-34.414V512.041H416.8ZM641.608,597.9q-26.632,25.854-26.632,63.726,0,37.183,26.632,63.553t64.158,26.372q37.524,0,64.072-26.286t26.545-63.639q0-36.836-26.2-63.207t-62.862-26.373Q668.238,572.048,641.608,597.9Zm81.8,45.481a26.759,26.759,0,0,1-.086,36.749,24.25,24.25,0,0,1-35.279,0,26.759,26.759,0,0,1-.086-36.749A24.646,24.646,0,0,1,723.405,643.383ZM898.24,572.048q-34.069,0-54.473,22.222T823.36,653.846v94.248h64.677V666.3q0-26.977,17.64-26.978,5.532,0,12.278,3.805V573.951a132.589,132.589,0,0,0-19.715-1.9h0Zm208.9,88.2q0-37.353-25.5-62.861-25.515-25.506-63.04-25.507-38.388,0-64.762,26.112t-26.372,63.986q0,38.046,26.113,63.812t64.5,25.767q31.47,0,57.24-20.233l-36.83-44.271q-9,9.687-18.68,9.684-11.925,0-19.28-10.376t-7.349-27.15q0-16.083,7.609-26.373t19.71-10.289q18.165,0,21.62,19.2h-32.86a48.026,48.026,0,0,0-3.11,16.948,47.473,47.473,0,0,0,2.25,13.662h98.05q0.69-8.3.69-12.106h0Zm132.3-6.917q0,34.414-24.91,34.414a24.755,24.755,0,0,1-17.81-7.177,23.051,23.051,0,0,1-7.43-17.207,24.469,24.469,0,0,1,7.17-17.726,23.215,23.215,0,0,1,17.21-7.349q7.95,0,15.91,6.225V573.259q-11.6-1.038-17.29-1.038-35.97,0-62.26,26.632t-26.29,63.121q0,37.7,26.46,63.639t65.03,25.94a89.523,89.523,0,0,0,37.78-8.474,84.807,84.807,0,0,0,30.35-22.827q20.76-24.9,20.75-64.5V512.041h-64.67V653.327Zm206.82-8.128q2.25-3.8,12.63-8.992,31.815-15.909,31.82-55.166,0-31.817-22.22-53.35t-54.74-21.53a77.736,77.736,0,0,0-35.45,8.647,76.6,76.6,0,0,0-27.84,23.346q-14.52,19.889-14.53,51.361h59.67q0-23.517,16.94-23.519a14.773,14.773,0,0,1,14.88,14.872q0,10.725-13.32,16.6l-11.76,5.188q-12.795,5.706-17.64,16t-4.84,31.906v10.9h64.16Q1444.02,649,1446.26,645.2Zm-62.08,37.44a40.054,40.054,0,0,0-11.93,29.312q0,17.814,11.5,29.312t29.31,11.5a40.27,40.27,0,0,0,29.23-11.846,38.764,38.764,0,0,0,12.1-28.793A40.048,40.048,0,0,0,1442.2,682.9a39.636,39.636,0,0,0-29.14-12.278A39.2,39.2,0,0,0,1384.18,682.639Z"></path>
        </svg>
      </DrawSVG>
    </div>
  );
}