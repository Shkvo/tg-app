import './Input.scss';

export default () => {
  const element = document.createElement('input');
  element.classList.add('default-input');

  return element;
}