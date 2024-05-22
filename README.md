<p align="center">
<img src="./res/icon.png" height="150">
</p>

<h1 align="center">
Open in XX
</h1>

<p align="center">
Help you open the links that associated with current repository conveniently.
</p>

<p align="center">
<a href="https://marketplace.visualstudio.com/items?itemName=LuJiejie.open-in-xx" target="__blank"><img src="https://img.shields.io/visual-studio-marketplace/v/LuJiejie.open-in-xx?color=ddd&labelColor=444&logo=visualstudiocode&label=VS%20Code%20Marketplace" alt="Visual Studio Marketplace Version" /></a>
<a href="https://github.com/Lu-Jiejie/flowmit/blob/main/LICENSE" target="__blank"><img src="https://img.shields.io/github/license/Lu-Jiejie/flowmit?style=flat&color=ddd&labelColor=444" alt="LICENSE" /></a>
</p>

English | [简体中文](./README.zh-CN.md)

Open in GitHub! Open in NPM! Open in PyPI! Or open in XX!

Help you open the links that associated with current repository conveniently, such as GitHub, NPM, or or other links that you have configured.

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

<!-- Badge -->
[marketplace-version-badge]: https://img.shields.io/visual-studio-marketplace/v/LuJiejie.open-in-xx?color=ddd&labelColor=444&logo=visualstudiocode&label=VS%20Code%20Marketplace
[marketplace-version-href]: https://marketplace.visualstudio.com/items?itemName=LuJiejie.open-in-xx
