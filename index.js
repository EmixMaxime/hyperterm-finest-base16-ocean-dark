// Colors
const DARKER_BLACK = '54, 59, 72'
const BLACK = '57, 63, 76'
const LIGHT_BLACK = '#646f85'
const RED = '#cc777d'
const LIGHT_RED = '#da9a83'
const GREEN = '#b2c89d'
const LIGHT_GREEN = '#c2daab'
const YELLOW = '#f0d49c'
const LIGHT_YELLOW = '#ffe1a6'
const BLUE = '#a0b1c0'
const LIGHT_BLUE = '#b7cadb'
const MAGENTA = '#c2a1bb'
const LIGHT_MAGENTA = '#d5b1cd'
const CYAN = '#a6c2c1'
const LIGHT_CYAN = '#b0cdcd'
const WHITE = '#cbd0d7'
const LIGHT_WHITE = '#dbe1e8'

// Constants
const BACKGROUND_COLOR = BLACK
const FOREGROUND_COLOR = WHITE
const INACTIVE_TAB_BACKGROUND = DARKER_BLACK
const BORDER_COLOR = '77, 84, 99'
const COLORS = {
  black: BLACK,
  red: RED,
  green: GREEN,
  yellow: YELLOW,
  blue: BLUE,
  magenta: MAGENTA,
  cyan: CYAN,
  white: WHITE,
  lightblack: LIGHT_BLACK,
  lightRed: LIGHT_RED,
  lightGreen: LIGHT_GREEN,
  lightYellow: LIGHT_YELLOW,
  lightBlue: LIGHT_BLUE,
  lightMagenta: LIGHT_MAGENTA,
  lightCyan: LIGHT_CYAN,
  lightWhite: LIGHT_WHITE
}

// Apply theme
exports.decorateConfig = (config) => {
  const themeConfig = Object.assign({ opacity: 1 }, config.finestOceanDark)
  const opacity = themeConfig.opacity
  const isTransparent = opacity < 1
  const borderShimDisplay = isTransparent ? 'none' : 'block'
  const leftBorderWidth = isTransparent ? '0px' : '1px'
  const inactiveTabOpacity = isTransparent ? '0.35' : '1'

  return Object.assign({}, config, {
    backgroundColor: `rgba(${BACKGROUND_COLOR}, ${opacity})`,
    foregroundColor: FOREGROUND_COLOR,
    borderColor: `rgba(${BORDER_COLOR}, ${opacity})`,
    cursorColor: FOREGROUND_COLOR,
    colors: COLORS,
    css: `
      ${config.css || ''}
      /* Set tab colors */
      .tab_tab {
        border-top-width: 0px !important;
        border-right-width: 0px !important;
        border-left-width: 1px !important;
        border-bottom-width: 1px;
        border-bottom-color: rgba(${BORDER_COLOR}, ${opacity});
        border-style: solid !important;
        border-image: linear-gradient(to bottom, rgba(77, 84, 99, 0) 0%, rgba(77, 84, 99, 1) 100%) 1 !important;
      }
      .tab_tab:not(.tab_active) {
        color: ${FOREGROUND_COLOR} !important;
        background-color: rgba(${INACTIVE_TAB_BACKGROUND}, ${inactiveTabOpacity}) !important;
      }
      .tab_tab:not(.tab_active).tab_first {
        border-left-width: ${leftBorderWidth} !important;
      }
      /* Hide bottom border if tab is active, make bg lighter */
      .tab_tab.tab_active {
        border-left: 1px solid rgba(${BORDER_COLOR}, ${opacity}) !important;
        color: #fff !important;
        border-bottom-width: 0px !important;
      }
      /* Hide bottom border if tab is active, make bg lighter */
      .tab_tab.tab_active.tab_first {
        border-left-width: ${leftBorderWidth} !important;
      }
      .tabs_borderShim {
        display: ${borderShimDisplay} !important;
      }
      .tab_tab:last-child {
        border-right: 1px solid transparent !important;
      }
      /* Hide hardcoded black bottom border */
      .tab_active:before {
        border-bottom: none !important;
      }
      .tab_text {
        border-color: transparent !important;
      }
    `
  })
}
