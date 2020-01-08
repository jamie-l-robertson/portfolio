import * as React from "react";
import { Globals } from "react-spring";
import { useReduceMotion } from "@hooks/reduceMotion.hook";
import { StyledParticles } from "./styles";

const BackgroundParticles = () => {
  const prefersReducedMotion = useReduceMotion();

  let params = {
    "particles": {
      "number": {
        "value": 12,
        "density": {
          "enable": true,
          "value_area": 1262.6362266116362
        }
      },
      "color": {
        "value": "#1b1e34"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
      },
      "opacity": {
        "value": 0.3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 160,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 12.181158184520175,
          "size_min": 40,
          "sync": true
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 200,
        "color": "#ffffff",
        "opacity": 1,
        "width": 2
      },
      "move": {
        "enable": !prefersReducedMotion,
        "speed": 8,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "retina_detect": false
  };

  return (
    <StyledParticles params={params} />
  )
};

export default BackgroundParticles;
