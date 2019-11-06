import Container from '../../components/Container';
import Image from '../../components/Image';
import Text from '../../components/Text';
import Input from '../../components/Input';
import Button from '../../components/Button';
import LogoSrc from '../../images/t_logo.png';

import './LoginPage.scss';

export default () => {
  const TelegramLogo = Image({
    src: LogoSrc,
    className: 'logo',
  });

  const HeadingText = Text({
    type: 'h2',
    children: 'Sign in to Telegram',
    className: 'title',
  });

  const CountryInput = Input({
    placeholder: 'Country',
  });

  const PhoneInput = Input({
    placeholder: 'Phone Number',
    type: 'tel',
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

  const LoginPage = Container({
    children: [
      TelegramLogo,
      HeadingText,
      DefaultText,
      CountryInput,
      PhoneInput,
      NextButton,
    ],
    className: 'login-page',
  });

  const updatePhone = (e) => {
    if (e.target.value.length && CountryInput.firstElementChild.value.length) {
      NextButton.style.display = 'block';
    } else {
      NextButton.style.display = 'none';
    }
  };

  const updateCountry = (e) => {
    if (e.target.value.length && PhoneInput.firstElementChild.value.length) {
      NextButton.style.display = 'block';
    } else {
      NextButton.style.display = 'none';
    }
  };

  return () => {
    CountryInput.addEventListener('input', updateCountry);
    PhoneInput.addEventListener('input', updatePhone);

    document.body.innerHTML = '';
    document.body.append(LoginPage);
  };
};
