import { Component } from 'react';
import Icon from '../Icon';
import styles from './index.css';
import Icons from '../icons/';

const IconList = Object.keys(Icons);

export default class IconDemo extends Component {
  state = {
    color: document.documentElement.style.getPropertyValue('--brand-primary'),
  }
  componentDidMount() {
    if (typeof MutationObserver === 'function') {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutationRecord) => {
          this.setState({
            color: document.documentElement.style.getPropertyValue('--brand-primary'),
          });
        });
      });

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['style'],
      });
    }
  }
  render() {
    return (
      <div>
        {
          IconList.map(name => (
            <div className={styles['Icon--grid']} key={name}>
              <Icon size={48} name={name} color={this.state.color} />
              <span className={styles['Icon-name']}>{name}</span>
            </div>
          ))
        }
      </div>
    );
  }
}
