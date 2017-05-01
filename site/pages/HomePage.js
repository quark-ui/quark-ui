import { Component } from 'react';
import TextToSVG from 'text-to-svg';
import assign from 'object-assign';

// import QuarkUI from '../../index';
// const ComponentList = Object.keys(QuarkUI).map(c => c);

export default class Home extends Component {

  state = {
    paths: [],
  };

  componentWillMount() {
    TextToSVG.load('/fonts/Audiowide-Regular.ttf', (err, font) => {
      this.textToSVG = new TextToSVG(font.font);
      this.getSVG();
    });
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
    if (!this.lineDrawing) {
      this.lineDrawing = anime({
        targets: '#lineDrawing path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 2000,
        delay: (el, i) => i * 1000,
        direction: 'alternate',
        loop: true,
      });
    }
  }

  getSVG() {
    const attributes = {
      'fill-rule': 'evenodd',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': 2,
    };
    const options = { x: 0, y: 0, fontSize: 72, anchor: 'top', attributes };
    // const componentNamePath = ComponentList.map(c => this.textToSVG.getD(c, options));
    const Text = 'QUARK-UI';
    const TextList = Text.split('');
    let offset = 0;
    const paths = TextList.map((char) => {
      const sizeObj = this.textToSVG.getMetrics(char, options);
      const x = options.x + offset;
      offset += sizeObj.width;
      return this.textToSVG.getPath(char, assign({}, options, {
        x,
      }));
    });
    const logoSize = this.textToSVG.getMetrics(Text, options);
    this.setState({
      paths,
      width: logoSize.width,
      height: logoSize.height,
    });
  }

  render() {
    const { paths, width, height } = this.state;
    return (
      <div>
        Home
        <div>
          <div id="lineDrawing">
            <svg viewBox={`0 0 ${width} ${height}`} dangerouslySetInnerHTML={{ __html: paths.join('') }} />
          </div>
        </div>
      </div>
    );
  }
}
