export default ({
  elementName,
  className,
  children,
  onClick,
}) => {
  const element = document.createElement(elementName);

  if (className) {
    element.classList.add(...className.split(' '));
  }

  if (children) {
    element.append(...children);
  }

  if (onClick) {
    element.addEventListener('click', onClick);
  }

  return element;
};
