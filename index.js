// Colors
const DARKER_BLACK = '#363b48';
const BLACK = '#393f4c'
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
const BORDER_COLOR = '#4d5463'
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
exports.decorateConfig = (config) => (
Object.assign({}, config, {
  BACKGROUND_COLOR,
  FOREGROUND_COLOR,
  borderColor: BORDER_COLOR,
  cursorColor: FOREGROUND_COLOR,
  COLORS,
  css: `
      ${config.css || ''}
      /* Highlight active tab by making rest of nav darker */
      .tabs_list {
        background-color: ${DARKER_BLACK} !important;
      }
      /* Set tab colors */
      .tab_tab {
        background-color: ${DARKER_BLACK} !important;
        border: none !important;
        border-right: 1px solid transparent !important;
        border-left: 1px solid transparent !important;
      }
      .tab_tab:not(.tab_active) {
        color: ${FOREGROUND_COLOR} !important;
      }
      /* Hide bottom border if tab is active, make bg lighter */
      .tab_tab.tab_active {
        background-color: ${BACKGROUND_COLOR} !important;
        height: calc(100% + 1px);
        border-left: 1px solid ${BORDER_COLOR} !important;
        border-right: 1px solid ${BORDER_COLOR} !important;
        color: #fff !important;
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
)

// Development middleware for HMR
exports.middleware = () => (next) => (action) => {
  /* eslint-disable no-param-reassign, default-case */
  switch (action.type) {
    case 'CONFIG_LOAD':
    case 'CONFIG_RELOAD':
      action.config.foregroundColor = FOREGROUND_COLOR
      action.config.backgroundColor = BACKGROUND_COLOR
      action.config.cursorColor = FOREGROUND_COLOR
      action.config.colors = COLORS
  }
  next(action)
}
