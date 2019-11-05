import './Input.scss';
import createDefaultElement from '../../utils/createDefaultElement';

export default ({ className }) => {
  const element = createDefaultElement({
    elementName: 'input',
    className: className ? `default-input ${className}` : 'default-input',
  });

  return element;
};
