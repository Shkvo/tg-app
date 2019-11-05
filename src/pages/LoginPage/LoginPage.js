import Container from '../../components/Container';
import Image from '../../components/Image';
import Text from '../../components/Text';
import Input from '../../components/Input';
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

  const PhoneInput = Input({
    placeholder: 'Phone Number',
    type: 'tel',
  });

  const CountryInput = Input({
    placeholder: 'Country',
  });

  const DefaultText = Text({
    type: 'span',
    children: 'Please confirm your country and enter your phone number.',
    className: 'description',
  });

  const LoginPage = Container({
    children: [
      TelegramLogo,
      HeadingText,
      DefaultText,
      CountryInput,
      PhoneInput,
    ],
    className: 'login-page',
  });

  document.body.innerHTML = '';
  document.body.append(LoginPage);
};
