export const COLORS = {
  blue: '#377dff',
  darkBlue: '#222b45',
  blueNight: '#333c54',
  blueGray: '#677788',
  darkBlueNight: '#1e2022',
  indigo: '#6610f2',
  purple: '#6f42c1',
  pink: '#d63384',
  red: '#ff0031',
  orange: '#fd7e14',
  yellow: '#ffc107',
  green: '#198754',
  teal: '#20c997',
  cyan: '#0dcaf0',
  fuxia: '#e000fe'
}

export const GRAY_SCALE = {
  white: '#fff',
  gray100: '#f8f9fa',
  gray200: '#e9ecef',
  gray300: '#dee2e6',
  gray400: '#ced4da',
  gray500: '#adb5bd',
  gray600: '#6c757d',
  gray700: '#495057',
  gray800: '#343a40',
  gray900: '#212529',
  black: '#000'
}

export const COLORS_GRADIENTS = {
  gradientLight: 'linear-gradient( 120deg , rgb(255, 255, 255) 15%, rgb(247, 250, 255) 100%)',
  gradientDark: 'linear-gradient(120deg , rgb(34, 43, 69) 0%, rgb(26, 33, 56) 100%)'
}

export const FONTS = {
  inter: '"Inter", sans-serif'
}

export const FONTS_SIZES = {
  sm: '0.75rem',
  medium: '0.875rem',
  button: '0.9375rem',
  base: '1rem',
  lead: '1.125rem',
  large: '1.5625rem',
  xlarge: '2rem'
}

export const GRID_BREAKPOINTS = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
}

export const MEDIA_BREAKPOINTS = {
  mobile: `@media (min-width: ${GRID_BREAKPOINTS.sm}px)`,
  tablet: `@media (min-width: ${GRID_BREAKPOINTS.md}px)`,
  laptop: `@media (min-width: ${GRID_BREAKPOINTS.lg}px)`,
  desktop: `@media (min-width: ${GRID_BREAKPOINTS.xl}px)`,
  desktopL: `@media (min-width: ${GRID_BREAKPOINTS.xxl}px)`
}

export const CONTAINER_MAX_WIDTHS = {
  sm: '540px',
  md: '720px',
  lg: '1000px',
  xl: '1140px',
  xxl: '1320px'
}

export const BORDER_RADIUS = {
  base: '0.5rem',
  sm: '0.25rem',
  lg: '0.75rem',
  pill: '50em'
}

export const TRANSITIONS = {
  base: '0.3s ease'
}

export const Z_INDEXS = {
  nav: 1000,
  modal: 2000
}
