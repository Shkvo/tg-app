import Container from '../../components/Container';
import Image from '../../components/Image';
import Text from '../../components/Text';
import LogoSrc from '../../images/t_logo.png';

import './LoginPage.scss';

export default () => {
  const TelegramLogo = Image({
    src: LogoSrc,
    className: 'logo',
  });

  const HeadingText = Text({
    type: 'h1',
    children: 'Sign in to Telegram',
  });

  const DefaultText = Text({
    type: 'span',
    children: 'Please confirm your country and enter your phone',
  });

  const LoginPage = Container({
    children: [
      TelegramLogo,
      HeadingText,
      DefaultText,
    ],
    className: 'login-page',
  });

  document.body.innerHTML = '';
  document.body.append(LoginPage);
};
