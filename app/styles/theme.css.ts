// import { colorboxForXD, colorboxPalette } from '../workflow'

import { createGlobalTheme } from '@vanilla-extract/css'
import { modularScale } from 'polished'

// console.log('Paste these in theme.css.ts => baseColors \n', colorboxPalette)
// console.log('Paste these in Adobe XD Get Color plugin \n', colorboxForXD)

const ratioNames = {
  minorSecond: 1.067,
  majorSecond: 1.125,
  minorThird: 1.2,
  majorThird: 1.25,
  perfectFourth: 1.333,
  augFourth: 1.414,
  perfectFifth: 1.5,
  minorSixth: 1.6,
  goldenSection: 1.618,
  majorSixth: 1.667,
  minorSeventh: 1.778,
  majorSeventh: 1.875,
  octave: 2,
  majorTenth: 2.5,
  majorEleventh: 2.667,
  majorTwelfth: 3,
  doubleOctave: 4
}

const unit = 4
const px = (value: string | number) => `${value}px`
const createScale = (ratio: keyof typeof ratioNames | number, base: number) => (steps: number) =>
  `${modularScale(steps, base, ratio)}px`

const fontScale = createScale('majorThird', 16)
const lineHeightScale = createScale('majorThird', 20)

const baseColors = {
  neutral_0: '#f7faff',
  neutral_1: '#dadee5',
  neutral_2: '#888d96',
  neutral_3: '#42454c',
  neutral_4: '#2b2e33',
  primary_0: '#ff80c3',
  primary_1: '#e24398',
  primary_2: '#9f2c6a',
  primary_3: '#601a3f',
  primary_4: '#4d1734',
  secondary_0: '#8787ff',
  secondary_1: '#5959d1',
  secondary_2: '#3e3e94',
  secondary_3: '#25255b',
  secondary_4: '#21214d',
  optional_0: '#ebfcff',
  optional_1: '#d0e0e3',
  optional_2: '#799095',
  optional_3: '#35484b',
  optional_4: '#223033'
}

const fixedColors = {
  transparent: 'transparent',
  white: '#fff',
  white_alpha_08: 'rgba(255,255,255, .8)',
  white_alpha_06: 'rgba(255,255,255, .6)',
  white_alpha_04: 'rgba(255,255,255, .4)',
  white_alpha_02: 'rgba(255,255,255, .2)',
  black: '#000',
  black_alpha_08: 'rgba(0,0,0, .8)',
  black_alpha_06: 'rgba(0,0,0, .6)',
  black_alpha_04: 'rgba(0,0,0, .4)',
  black_alpha_02: 'rgba(0,0,0, .2)'
}

export const vars = createGlobalTheme(':root', {
  color: {
    ...baseColors,
    ...fixedColors,

    // defaults
    primary: baseColors.primary_1,
    secondary: baseColors.secondary_1,
    optional: baseColors.optional_1,
    neutral: baseColors.neutral_0,
    chrome: baseColors.neutral_0, // also applies to body
    page: fixedColors.white
  },
  font: {
    body: 'obvia, sans-serif',
    heading: 'obvia, sans-serif'
  },
  fontSize: {
    '-2x': fontScale(-2),
    '-1x': fontScale(-1),
    '1x': fontScale(0),
    '2x': fontScale(1),
    '3x': fontScale(2),
    '4x': fontScale(3),
    '5x': fontScale(4),
    '6x': fontScale(5),
    '7x': fontScale(6),
    '8x': fontScale(7)
  },
  lineHeight: {
    '-2x': lineHeightScale(-2),
    '-1x': lineHeightScale(-1),
    '1x': lineHeightScale(0),
    '2x': lineHeightScale(1),
    '3x': lineHeightScale(2),
    '4x': lineHeightScale(3),
    '5x': lineHeightScale(4),
    '6x': lineHeightScale(5),
    '7x': lineHeightScale(6),
    '8x': lineHeightScale(7)
  },
  unit: px(unit),
  spacing: {
    none: '0',
    xsmall: px(1 * unit),
    small: px(2 * unit),
    medium: px(3 * unit),
    large: px(5 * unit),
    xlarge: px(8 * unit),
    xxlarge: px(12 * unit),
    xxxlarge: px(24 * unit)
  },
  // gradients generated from:
  // https://shadows.brumm.af
  shadows: {
    small:
      '0px 0px 0.1px rgba(0, 0, 0, 0.039), 0px 0px 0.3px rgba(0, 0, 0, 0.049), 0px 0px 0.5px rgba(0, 0, 0, 0.054), 0px 0px 0.9px rgba(0, 0, 0, 0.059), 0px 0px 1.7px rgba(0, 0, 0, 0.068), 0px 0px 4px rgba(0, 0, 0, 0.1)',
    medium:
      '0px 0.4px 0.3px rgba(0, 0, 0, 0.039), 0px 0.8px 0.7px rgba(0, 0, 0, 0.049), 0px 1.3px 1.3px rgba(0, 0, 0, 0.054), 0px 2.2px 2.2px rgba(0, 0, 0, 0.059), 0px 3.7px 4.2px rgba(0, 0, 0, 0.068), 0px 8px 10px rgba(0, 0, 0, 0.1)',
    large:
      '0px 1.3px 0.8px rgba(0, 0, 0, 0.039), 0px 2.9px 2px rgba(0, 0, 0, 0.049), 0px 5px 3.8px rgba(0, 0, 0, 0.054), 0px 8.1px 6.7px rgba(0, 0, 0, 0.059), 0px 13.8px 12.5px rgba(0, 0, 0, 0.068), 0px 30px 30px rgba(0, 0, 0, 0.1)'
  },
  border: {
    width: {
      standard: px(1 * unit),
      large: px(2 * unit)
    },
    radius: {
      small: px(1 * unit),
      medium: px(2 * unit),
      large: px(4 * unit),
      full: '9999px'
    }
  }
})

// TODO: remove tablet breakpoint (will decrease sprinkles.css size)
export const rawBreakpoints = {
  mobile: 0,
  laptop: 62,
  desktop: 90
}

export const breakpoints = {
  x_tablet: 'screen and (min-width: 42em)',
  xx_laptop: 'screen and (min-width: 62em)',
  xxx_desktop: 'screen and (min-width: 1440px)'
}
