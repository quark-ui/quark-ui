import Icon from '../Icon';
import { Component } from 'react';
import styles from './index.css';

const IconList = [
  'ellipsis',
  'caution',
  'question',
  'account',
  'setting',
  'paper',
  'finance',
  'check',
  'arrow-left',
  'arrow-right',
  'check',
  'home',
];

export default class IconDemo extends Component {
  render() {
    return (
      <div>
        {
          IconList.map(name => (
            <div className={styles['Icon--grid']} key={name}>
              <Icon size={48} name={name} />
              <span className={styles['Icon-name']}>{name}</span>
            </div>
          ))
        }
      </div>
    );
  }
}
