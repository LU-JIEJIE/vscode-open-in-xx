# Open in XX

<a href="https://marketplace.visualstudio.com/items?itemName=LuJiejie.open-in-xx" target="__blank"><img src="https://img.shields.io/visual-studio-marketplace/v/LuJiejie.open-in-xx.svg?color=eee&amp;label=VS%20Code%20Marketplace&logo=visual-studio-code" alt="Visual Studio Marketplace Version" /></a>

[English](./README.md) | 简体中文

帮助你更方便地打开与当前仓库相关的链接，如 Github、NPM 或其他你配置的链接。

## 使用

确保你在 `settings.json` 中进行了配置。点击状态栏中的 `Open in XX` 按钮，将显示可能与当前存储库相关联的一些链接，点击它们并在浏览器中打开！

## 配置

```json
{
  // 是否自动生成某些链接，如 github
  "open-in-xx.auto": false,

  // 你认为可能与当前存储库相关的链接
  "open-in-xx.links": [
    {
      // 链接项的名称
      "name": "github",
      // 链接项的 URL
      "url": "https://github.com/LU-JIEJIE/vscode-open-in-xx"
    },
    {
      "name": "VS Code Marketplace",
      "url": "https://marketplace.visualstudio.com/items?itemName=LuJiejie.open-in-xx",
      // 链接项的图标，它是内置的，可选。当未设置时，图标取决于链接项的名称
      "icon": "marketplace"
    }
  ]
}
```
