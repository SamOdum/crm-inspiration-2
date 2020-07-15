import React from 'react';
import {
  FaUser,
  FaHeart,
  FaRss,
  FaUnlockAlt,
  FaDollarSign,
} from 'react-icons/fa';

export const linkData1 = {
  id: 'my-account',
  linkTo: './my-account',
  preIcon: <FaUser />,
  postIcon: null,
  linkText: 'My Account',
};
export const linkData2 = {
  id: 'wishlist',
  linkTo: './wishlist',
  preIcon: <FaHeart />,
  postIcon: null,
  linkText: 'Wishlist',
};
export const linkData3 = {
  id: 'blog',
  linkTo: './blog',
  preIcon: <FaRss />,
  postIcon: null,
  linkText: 'Blog',
};
export const linkData4 = {
  id: 'login',
  linkTo: './login',
  preIcon: <FaUnlockAlt />,
  postIcon: null,
  linkText: 'Login',
};
//   export const linkData5 = {
//   id: 'language',
//   linkTo: './leanguage',
//   preIcon: null,
//   postIcon: <FaAngleDown />,
//   linkText: 'English',
// };
export const linkData6 = {
  id: 'currency',
  linkTo: null,
  preIcon: null,
  postIcon: <FaDollarSign />,
  linkText: 'NGN',
};
export const linkData7 = {
  id: 'register',
  linkTo: null,
  preIcon: null,
  postIcon: <FaUser />,
  linkText: 'Register',
};
