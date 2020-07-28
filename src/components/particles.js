/**
 * @Description:
 * @Author: caoyanchang
 * @Date: 2020/7/28 4:24 下午
 *
 */
import React, {PureComponent} from "react";
import Particles from "react-particles-js";
import './particles.scss';


export default class LoginBackGround extends PureComponent {
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
                    className="particles-bg"
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
