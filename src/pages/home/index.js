/**
 * @Description: 首页
 * @Author: caoyanchang
 * @Date: 2020/7/28 4:52 下午
 *
 */
import React, {PureComponent} from "react";
import './index.scss';
import axios from 'axios';
import LoginBackGround from "../../components/particles";

export default class Home extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            tips: 'Hello   Lamar!!!'
        }
    }

    componentWillMount() {

    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <div className="home-bg">
                <div className="home-text">{this.state.tips}</div>
            </div>
        );
    }

    getData() {

        console.log("cyc----getData1")
        //http://119.45.34.76:8080/api/greet/hello
        axios.defaults.baseURL = '/api';
        axios.get('/greet/hello')
            .then((response) => {
                console.log("cyc----getData2", response)
                this.setState({
                    tips: response.data
                })
            }).catch((error) => {
            console.log("cyc----error", error)
        })

    }


}
