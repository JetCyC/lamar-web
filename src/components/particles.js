/**
 * @Description:
 * @Author: caoyanchang
 * @Date: 2020/7/28 4:24 下午
 *
 */
import {Component} from "react";

export default class LoginBackGround extends Component {
  constructor() {
    super();
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Particles
          className="login-bg"
          params={{
            particles: {
              number: {
                value: 180
              },
              color: {
                value: "#2196f3"
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000"
                },
                polygon: {
                  nb_sides: 5
                },
              },
              line_linked: {
                enable: true,
                distance: 180,
                color: "#2196f3",
                opacity: 1,
                width: 1
              },
              move: {
                speed: 6
              }
            }
          }}
        />
      </div>
    );
  }


}
