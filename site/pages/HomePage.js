import { PureComponent } from 'react';

import Icon from '../../src/components/icon';

import image3 from '../images/3.jpg';
import image7 from '../images/7.gif';
import image8 from '../images/8.jpg';
import image9 from '../images/9.jpg';
import image10 from '../images/10.jpg';
import image11 from '../images/11.jpg';

import styles from '../Site.css';


// import QuarkUI from '../../index';
// const ComponentList = Object.keys(QuarkUI).map(c => c);
import Layout from '../layouts/Layout';

const Contributor = {
  developer: [
    {
      avatar: '//github.com/macisi.png?size=64',
      name: 'Theone',
    },
    {
      avatar: '//github.com/grootfish.png?size=64',
      name: '虞杨杰',
    },
    {
      avatar: image3,
      name: '董建德',
    },
    {
      avatar: '//github.com/olivianate.png?size=64',
      name: '闫伟',
    },
    {
      avatar: '//github.com/ctocto.png?size=64',
      name: '何凡',
    },
    {
      avatar: '//github.com/lhf-nife.png?size=64',
      name: '刘慧芬',
    },
  ],
  designer: [
    {
      avatar: image7,
      name: '孙锴源',
    },
    {
      avatar: image8,
      name: '王晨丽',
      profile: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzIyMDE0MDY1Mw==#wechat_redirect',
    },
    {
      avatar: image9,
      name: '朱洪强',
    },
  ],
};

const CubeNumber = 16;
const CubeArray = new Array(CubeNumber).fill('');

export default class Home extends PureComponent {

  static renderContributor = list => (
    list.map(o => (
      <div key={o.name} className={styles.box__img}>
        <img src={o.avatar} alt={o.name} />
        <p>{o.name}</p>
      </div>
    ))
  )

  static renderCubes = () => (
    <div className={styles.home__stage}>
      <div className={styles.stage__grid}>
        {
          CubeArray.map((c, i) => (
            <div className={styles.cube} key={i}>
              <div className={styles.cube__squisher}>
                <div className={styles.cube__face} />
                <div className={styles.cube__face} />
                <div className={styles.cube__face} />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )

  render() {
    return (
      <Layout {...this.props}>
        <div className={styles.home__con}>
          {
            Home.renderCubes()
          }
          <div className={styles.home__box}>
            <p className={styles.explain}>夸克（英语：quark，又译“层子”或“亏子”）是一种基本粒子，也是构成物质的基本单元。取名 QuarkUI，寓意我们将努力提供一套能像 quark 一样成为构成项目的基石的组件库。</p>
            <h1>Advantage</h1>
            <div className={styles.advantages}>
              <div className={styles.advantage__block}>
                <Icon name="react" size={50} />
                <p>基于 React，背靠丰富生态社区</p>
              </div>
              <div className={styles.advantage__block}>
                <Icon name="theme" size={50} />
                <p>主题定制，适应不同设计场景</p>
              </div>
              <div className={styles.advantage__block}>
                <Icon name="customise" size={50} />
                <p>脱胎于业务，支撑企业级后台系统</p>
              </div>
            </div>
          </div>
          <div className={styles.home__box}>
            <h1>Case</h1>
            <div className={styles.box__exam}>
              <a href="http://katest.ehuodi.com" target="_blank" rel="noopener noreferrer">
                <img src={image10} alt="" />
              </a>
              <a href="http://ecargotest.ehuodi.com" target="_blank" rel="noopener noreferrer">
                <img src={image11} alt="" />
              </a>
            </div>
          </div>
          <div className={styles.home__box}>
            <h1>Contributor</h1>
            <h2>FED</h2>
            <div className={styles.bog__wrap}>
              {
                Home.renderContributor(Contributor.developer)
              }
            </div>
            <h2>UX</h2>
            <div>
              {
                Home.renderContributor(Contributor.designer)
              }
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
