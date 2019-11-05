import './Button.scss';
import createDefaultElement from '../../utils/createDefaultElement';

export default ({ children, className, onClick }) => {
  const element = createDefaultElement({
    elementName: 'button',
    className: className ? `default-button ${className}` : 'default-button',
    children,
    onClick,
  });

  return element;
};
