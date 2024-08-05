import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light', // Puedes usar 'dark' si prefieres un tema oscuro

  colorPrimary: '#FF4785', // Cambia a tus colores preferidos
  colorSecondary: '#1EA7FD',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'black',
  barBg: '#1EA7FD',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Mi Proyecto',
  brandUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Globant_Logo.svg',
  brandImage: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Globant_Logo.svg', // Cambia esta URL al logo que desees
});

export default theme;
