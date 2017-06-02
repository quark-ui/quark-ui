import Icon from '../Icon';
import styles from './index.css';

const IconList = [
  'ellipsis',
  'caution',
  'question',
  'question2',
  'account',
  'setting',
  'paper',
  'finance',
  'check',
  'arrow-left',
  'arrow-right',
  'double-arrow-left',
  'double-arrow-right',
  'check',
  'home',
  'info',
  'success',
  'warning',
  'error'
];

const IconDemo = () => (
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

export default IconDemo;
