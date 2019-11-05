import createDefaultElement from '../../utils/createDefaultElement';

export default ({ src, className, onClick }) => {
  const element = createDefaultElement({
    elementName: 'img',
    className: className ? `default-image ${className}` : 'default-button',
    onClick,
  });

  if (src) {
    element.src = src;
  }

  return element;
};
