# The very finest Hyperterm Base16 Ocean Dark theme

Inspired by the Spacegray dark theme by @mxstbr. The name is a joke -- I actually just built this theme for fun and thought I'd share it. Then I saw there were already two other versions... so I needed a cheeky name!  

![screenshot of the theme](screenshot.png)

## Installation

  1. Open up your ~/.hyperterm.js in your favorite code editor
  2. Add `hyperterm-finest-base16-ocean-dark` to your plugins array like so:
   
      ```
      plugins: [
        'hyperterm-finest-base16-ocean-dark',
      ],
      ```
  3. Fully reload Hyperterm (Cmd+Shift+R)

## Configure

### Opacity

Since version `0.5.0`, this plugin supports lower opacity backgrounds.

To use the background with a given opacity, edit `~/.hyper.js` and modify the `config` like so:

```js
module.exports = {
  config: {
    // ...
    finestOceanDark: {
      opacity: 0.9
    },
    // ...
  }
}
```

## License

MIT
