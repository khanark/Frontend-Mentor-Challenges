import desktopImg from '../images/illustration-sign-up-desktop.svg';
import mobileImg from '../images/illustration-sign-up-mobile.svg';

export const perks: string[] = [
  'Product discovery and building what matters',
  'Measuring to ensure updates are a success',
  'And much more!',
];

export const images = {
  desktop: desktopImg,
  mobile: mobileImg,
};

export enum ErrorMessages {
  Email = 'Valid email is required',
  Required = 'Email is required',
}

export const RegularExpressions: { [key: string]: RegExp } = {
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
};
