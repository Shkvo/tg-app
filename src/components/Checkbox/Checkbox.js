import './Checkbox.scss';
import Container from '../Container';
import Text from '../Text';
import createDefaultElement from '../../utils/createDefaultElement';

export default ({
  checked,
  onClick,
  className,
}) => {
  const checkbox = createDefaultElement({
    elementName: 'input',
    className: className ? `default-checkbox ${className}` : 'default-checkbox',
  });

  const label = Text({
    type: 'span',
  });

  checkbox.type = 'checkbox';
  checkbox.checked = checked || false;

  if (onClick) {
    checkbox.addEventListener('click', onClick);
  }

  const element = Container({
    className: 'checkbox-wrapper',
    children: [
      checkbox,
      label,
    ],
  });

  return element;
};
