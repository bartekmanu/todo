import React, { Component } from 'react';
import Particles from 'react-particles-js';

class CustomParticles extends Component {
  render() {
    return (
      <div className="particles">
        <Particles
          style={{
            width: '100%',
            height: '100%'
          }}
          params={{
            particles: {
              number: {
                value: 100,
                density: {
                  enable: true,
                  value_area: 1500
                }
              },
              line_linked: {
                enable: true,
                opacity: 0.02
              },
              move: {
                direction: 'right',
                speed: 0.1
              },
              size: {
                value: 2
              },
              opacity: {
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.05
                }
              }
            },
            interactivity: {
              events: {
                onclick: {
                  enable: true,
                  mode: 'push'
                }
              },
              modes: {
                push: {
                  particles_nb: 1
                }
              }
            },
            retina_detect: true
          }}
        />
      </div>
    );
  }
}

export default CustomParticles;
