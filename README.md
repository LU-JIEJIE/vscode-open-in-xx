# Open in XX

<a href="https://marketplace.visualstudio.com/items?itemName=LuJiejie.open-in-xx" target="__blank"><img src="https://img.shields.io/visual-studio-marketplace/v/LuJiejie.open-in-xx.svg?color=eee&amp;label=VS%20Code%20Marketplace&logo=visual-studio-code" alt="Visual Studio Marketplace Version" /></a>

English | [简体中文](./README.zh-CN.md)

Help you open the links that associated with current repository conveniently, such as Github, NPM, or or other links that you have configured.

## Usage

Make sure you set the configuration in your `settings.json` , and then click the `Open in XX` button in the status bar, which will show some links that may be associated with current repository. Just choose one to open!

## Configuration

```json
{
  // Whether to auto generate link like github
  "open-in-xx.auto": false,

  // The links that you think may be associated with current repository
  "open-in-xx.links": [
    {
      // The name of the link item
      "name": "github",
      // The url of the link item
      "url": "https://github.com/Lu-Jiejie/vscode-open-in-xx"
    },
    {
      "name": "VS Code Marketplace",
      "url": "https://marketplace.visualstudio.com/items?itemName=LuJiejie.open-in-xx",
      // The icon of the link item, it's built-in and optional. when not set, it depends on the name
      "icon": "marketplace"
    }
  ]
}
```
