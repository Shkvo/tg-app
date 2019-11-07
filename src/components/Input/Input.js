import './Input.scss';
import createDefaultElement from '../../utils/createDefaultElement';
import Container from '../Container';
import Text from '../Text';

export default ({
  type,
  value,
  items,
  pattern,
  onChange,
  className,
  placeholder,
  filterQuery,
  renderItemElement,
}) => {
  let popup;
  const defaultContainerClass = type && type === 'select' ? 'select-wrapper' : 'input-wrapper';
  const input = createDefaultElement({
    elementName: 'input',
    className: className ? `default-input ${className}` : 'default-input',
  });

  const label = Text({
    type: 'span',
    className: 'input-label',
    children: placeholder,
  });

  const elementChildren = [
    input,
    label,
  ];

  if (type && type === 'select') {
    const selectItemMap = (item) => {
      const rendered = renderItemElement(item);
      rendered.addEventListener('click', () => {
        label.classList.add('active');
        popup.classList.remove('active');
      }, true);
      return rendered;
    };

    const mappedChildren = items.map(selectItemMap);

    popup = Container({
      className: 'select-popup',
      children: mappedChildren,
    });

    input.addEventListener('input', () => {
      const filteredItems = items.filter((childrenItem) => childrenItem[filterQuery].toLowerCase()
        .includes(input.value.toLowerCase()));

      const popupWithFilteredItems = Container({
        className: 'select-popup active',
        children: filteredItems.map(selectItemMap),
      });

      popup.replaceWith(popupWithFilteredItems);
      popup = popupWithFilteredItems;
    });

    elementChildren.push(popup);
  }

  const element = Container({
    className: defaultContainerClass,
    children: elementChildren,
  });

  if (popup) {
    element.addEventListener('blur', () => {
      popup.classList.remove('active');
    });
  }

  if (value) {
    input.value = value;
  }

  if (pattern) {
    input.pattern = pattern;
  }

  if (onChange) {
    input.addEventListener('input', onChange);
  }

  input.addEventListener('focus', () => {
    label.classList.add('active');

    if (type === 'select') {
      element.classList.add('active');
      popup.classList.add('active');
    }
  });

  input.addEventListener('blur', () => {
    if (input.value) {
      label.classList.add('active');
    } else {
      label.classList.remove('active');
    }
    if (type === 'select') {
      element.classList.remove('active');
      // popup.classList.remove('active');
    }
  }, false);

  return element;
};
