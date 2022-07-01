import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from './theme.css'

// https://www.joshwcomeau.com/css/custom-css-reset/

/*
  1. Use a more-intuitive box-sizing model.
*/
globalStyle(`*, *::before, *::after`, {
  boxSizing: 'border-box'
})
/*
  2. Remove default margin
*/
globalStyle(`*`, {
  margin: 0
})

globalStyle('button', {
  appearance: 'none',
  background: 'none',
  border: 'none',
  margin: 0,
  padding: 0
})

/*
  3. Allow percentage-based heights in the application
*/
globalStyle(`html, body`, {
  height: '100%',
  lineHeight: vars.lineHeight['2x'],
  fontFamily: vars.font.body,
  background: vars.color.chrome,
  scrollBehavior: 'smooth'
})
/*
  6. Improve media defaults
*/
globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%'
})
/*
  7. Remove built-in form typography styles
*/
globalStyle('input, button, textarea, select', {
  font: 'inherit'
})
/*
  8. Avoid text overflows
*/
globalStyle('p, h1, h2, h3, h4, h5, h6', {
  overflowWrap: 'break-word'
})
/*
  9. Create a root stacking context
*/
globalStyle('#root, #__next', {
  isolation: 'isolate'
})

// globalStyle('.CookieConsent', {
//   position: 'fixed',
//   zIndex: 40,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   backgroundColor: vars.color.chrome,
//   color: vars.color.onChrome,
//   padding: vars.spacing.large,

//   '@media': {
//     [breakpoints.xx_laptop]: {
//       left: 'auto',
//       boxShadow: vars.shadows.large,
//       right: vars.spacing.large,
//       bottom: `${vars.spacing.large}!important`,
//       width: '350px',
//       backgroundColor: vars.color.surfaceContrast,
//       color: vars.color.onSurfaceContrast
//     }
//   }
// })

// globalStyle('.CookieConsent button', {
//   padding: '10px',
//   fontSize: '16px',
//   color: vars.color.white,
//   border: 'none',
//   borderRadius: vars.border.radius.small,
//   backgroundColor: 'transparent',
//   marginRight: '10px',
//   cursor: 'pointer',
//   paddingLeft: vars.spacing.large,
//   paddingRight: vars.spacing.large
// })

// globalStyle('.CookieConsent #rcc-confirm-button', {
//   backgroundColor: vars.color.secondary,
//   float: 'left'
// })

export const something = style({
  display: 'block'
})