import './Input.scss';
import createDefaultElement from '../../utils/createDefaultElement';
import Container from '../Container';
import Text from '../Text';

export default ({
  type,
  pattern,
  onChange,
  className,
  placeholder,
}) => {
  const input = createDefaultElement({
    elementName: 'input',
    className: className ? `default-input ${className}` : 'default-input',
  });

  const label = Text({
    type: 'span',
    className: 'input-label',
    children: placeholder,
  });

  if (onChange) {
    input.addEventListener('change', onChange);
  }

  if (type) {
    input.type = type;
  }

  if (pattern) {
    input.pattern = pattern;
  }

  input.addEventListener('keyup', (e) => {
    if (e.target.value) {
      label.classList.add('active');
    } else {
      label.classList.remove('active');
    }
  });

  const element = new Container({
    className: 'input-wrapper',
    children: [
      input,
      label,
    ],
  });

  return element;
};
