import './Container.scss';
import createDefaultElement from '../../utils/createDefaultElement';

export default ({ children, className, onClick }) => {
  const element = createDefaultElement({
    elementName: 'div',
    className: className ? `container ${className}` : 'container',
    children,
  });

  if (onClick) {
    element.addEventListener('click', onClick);
  }

  return element;
};
