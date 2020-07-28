/**
 * @Description:
 * @Author: caoyanchang
 * @Date: 2020/7/28 4:33 下午
 *
 */
import {PureComponent} from "react";
import LoginBackGround from "../../components/particles";
import './index.scss';

export default class NotFoundPage extends PureComponent {
  render() {
    return (
      <div className="not-found">
        <LoginBackGround></LoginBackGround>
        <p className="num">404</p>
        <p className="text">Ops,Something Wrong!</p>
      </div>
    );
  }
}


