import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import TextToSVG from 'text-to-svg';
import assign from 'object-assign';
import fontPath from '../fonts/Audiowide-Regular.ttf';
import image3 from '../images/3.jpg';
import image6 from '../images/6.jpg';
import image7 from '../images/7.jpg';
import image8 from '../images/8.jpg';
import image9 from '../images/9.jpg';
import image10 from '../images/10.jpg';
import image11 from '../images/11.jpg';


// import QuarkUI from '../../index';
// const ComponentList = Object.keys(QuarkUI).map(c => c);
import Layout from '../layouts/Layout';

export default class Home extends Component {

  render() {
    return (
      <Layout {...this.props}>
       <div styleName="home__con">
         <div styleName="home__box">
            <h1>组件亮点</h1>
            <p>夸克UI组件库以当前易货嘀大客户业务设计组件的优化为选择基础，同时考虑常规组件使用频率，形成目前组件库</p>
         </div>
         <div styleName="home__box">
            <h1>应用案例</h1>
            <div styleName="box__exam">
              <a href="http://katest.ehuodi.com" target="_blank">
                <img src={image10} />
              </a>
              <a href="http://ecargotest.ehuodi.com" target="_blank">
                <img src={image11} />
              </a>
            </div>
         </div>
         <div styleName="home__box">
            <h1>贡献人员</h1>
            <h2>工程师</h2>
            <div styleName="bog__wrap">
              <div styleName="box__img">
                  <a href="https://github.com/macisi" target="_blank">
                    <img src="https://github.com/macisi.png?size=64" />
                    <p>边刚</p>
                  </a>
              </div>
              <div styleName="box__img">
                <a href="https://github.com/grootfish" target="_blank">
                  <img src="https://github.com/grootfish.png?size=64" />
                  <p>虞杨杰</p>
                </a>
              </div>
              <div styleName="box__img">
                <a href="https://github.com/heifade" target="_blank">
                  <img src={image3} />
                  <p>董建德</p>
                </a>
              </div>
              <div styleName="box__img">
                <a href="https://github.com/olivianate" target="_blank">
                  <img src="https://github.com/olivianate.png?size=64" />
                  <p>闫伟</p>
                </a>
              </div>
              <div styleName="box__img">
                <a href="https://github.com/ctocto" target="_blank">
                  <img src="https://github.com/ctocto.png?size=64" />
                  <p>何凡</p>
                </a>
              </div>
              <div styleName="box__img">
                <a href="https://github.com/lhf-nife" target="_blank">
                  <img src={image6} />
                  <p>刘慧芬</p>
                </a>
              </div>
            </div>
            <h2>设计师</h2>
            <div>
              <div styleName="box__img">
                  <img src={image7} />
                  <p>孙锴源</p>
              </div>
              <div styleName="box__img">
                <a href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzIyMDE0MDY1Mw==#wechat_redirect" target="_blank">
                  <img src={image8} />
                  <p>王晨丽</p>
                </a>
              </div>
              <div styleName="box__img">
                  <img src={image9} />
                  <p>朱洪强</p>
              </div>
            </div>
         </div>
       </div>
      </Layout>
    );
  }
}
