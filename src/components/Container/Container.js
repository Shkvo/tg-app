import './Container.scss';
import createDefaultElement from '../../utils/createDefaultElement';

export default ({ children, className }) => {
  const element = createDefaultElement({
    elementName: 'div',
    className: className ? `container ${className}` : 'container',
    children,
  });

  return element;
};
