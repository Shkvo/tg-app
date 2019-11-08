import flag from 'country-code-emoji';
import Container from '../../components/Container';
import Image from '../../components/Image';
import Text from '../../components/Text';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import LogoSrc from '../../images/t_logo.png';

import './LoginPage.scss';

export default async () => {
  const response = await fetch('https://restcountries.eu/rest/v2/all');
  const countryData = await response.json();

  const TelegramLogo = Image({
    src: LogoSrc,
    className: 'logo',
  });

  const HeadingText = Text({
    type: 'h2',
    children: 'Sign in to Telegram',
    className: 'title',
  });

  const PhoneInput = Input({
    placeholder: 'Phone Number',
    type: 'tel',
    maxLength: 15,
  });

  const CountrySelect = Input({
    type: 'select',
    placeholder: 'Country',
    filterQuery: 'name',
    items: countryData,
    renderItemElement: (item) => Container({
      onClick: () => {
        CountrySelect.firstElementChild.value = item.name;
        const [code] = item.callingCodes;
        PhoneInput.firstElementChild.value = `+${code}`;
        PhoneInput.lastElementChild.classList.add('active');
        PhoneInput.firstElementChild.focus();
      },
      className: 'country-select-item',
      children: [
        Text({
          type: 'span',
          className: 'country-select-item-icon',
          children: flag(item.alpha2Code),
        }),
        Text({
          type: 'span',
          className: 'country-select-item-caption',
          children: item.name,
        }),
        Text({
          type: 'span',
          className: 'country-select-item-code',
          children: `+${item.callingCodes[0]}`,
        }),
      ],
    }),
  });

  const DefaultText = Text({
    type: 'span',
    children: 'Please confirm your country and enter your phone number.',
    className: 'description',
  });

  const NextButton = Button({
    children: 'Next',
    className: 'next-button',
  });

  const toggleKeepSignedText = Text({
    type: 'span',
    className: 'keep-signed-text',
    children: 'Keep me signed in',
  });

  const KeepSignedCheckbox = Checkbox({ checked: false });

  const KeepSignedContainer = Container({
    className: 'keep-signed-wrapper',
    children: [
      KeepSignedCheckbox,
      toggleKeepSignedText,
    ],
  });

  const LoginPage = Container({
    children: [
      TelegramLogo,
      HeadingText,
      DefaultText,
      CountrySelect,
      PhoneInput,
      KeepSignedContainer,
      NextButton,
    ],
    className: 'login-page',
  });

  const updatePhone = (e) => {
    if (!e.target.value) {
      CountrySelect.firstElementChild.value = '';
      CountrySelect.children[1].classList.remove('active');
    }

    if (e.target.value.length && CountrySelect.firstElementChild.value.length) {
      NextButton.style.display = 'block';
    } else {
      NextButton.style.display = 'none';
    }
  };

  const updateCountry = (e) => {
    if (!e.target.value) {
      PhoneInput.firstElementChild.value = '';
      PhoneInput.children[1].classList.remove('active');
    }

    if (e.target.value.length && PhoneInput.firstElementChild.value.length) {
      NextButton.style.display = 'block';
    } else {
      NextButton.style.display = 'none';
    }
  };

  const toggleKeepSigned = () => {
    KeepSignedCheckbox.firstElementChild.checked = !KeepSignedCheckbox.firstElementChild.checked;
  };

  CountrySelect.addEventListener('input', updateCountry);
  PhoneInput.addEventListener('input', updatePhone);
  KeepSignedContainer.addEventListener('click', toggleKeepSigned);

  document.body.innerHTML = '';
  document.body.append(LoginPage);
};
