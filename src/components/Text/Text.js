import './Text.scss';
import createDefaultElement from '../../utils/createDefaultElement';

const textTypes = {
  span: 'default-span',
  h1: 'default-h1',
  h2: 'default-h2',
  h3: 'default-h3',
  h4: 'default-h4',
  h5: 'default-h5',
  h6: 'default-h6',
  p: 'default-p',
};

export default ({
  type,
  children,
  className,
  onClick,
}) => {
  const element = createDefaultElement({
    elementName: type,
    className: className ? `${textTypes[type]} ${className}` : `${textTypes[type]}`,
    children,
    onClick,
  });

  return element;
};
