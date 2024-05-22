<p align="center">
<img src="./res/icon.png" height="150">
</p>

<h1 align="center">
Open in XX
</h1>

<p align="center">
帮助你更方便地打开与当前存储库关联的链接。
</p>

<p align="center">
<a href="https://marketplace.visualstudio.com/items?itemName=LuJiejie.open-in-xx" target="__blank"><img src="https://img.shields.io/visual-studio-marketplace/v/LuJiejie.open-in-xx?color=ddd&labelColor=444&logo=visualstudiocode&label=VS%20Code%20Marketplace" alt="Visual Studio Marketplace Version" /></a>
<a href="https://github.com/Lu-Jiejie/flowmit/blob/main/LICENSE" target="__blank"><img src="https://img.shields.io/github/license/Lu-Jiejie/flowmit?style=flat&color=ddd&labelColor=444" alt="LICENSE" /></a>
</p>

[English](./README.md) | 简体中文

在 GitHub 中打开！在 NPM 中打开！在 PyPI 中打开！或者在 XX 中打开！

帮助你更方便地打开与当前仓库相关的链接，如 GitHub、NPM 或其他你配置的链接。

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
      "url": "https://github.com/Lu-Jiejie/vscode-open-in-xx"
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
### 图标

所有内置的图标如下：
+ tampermonkey
+ bilibili
+ npm
+ gitlab
+ gitee
+ pypi
+ discord
+ greasyfork
+ twitter
+ x
+ facebook
+ youtube
+ yuque
+ feishu
+ maven
+ docker
+ tieba
+ netlify
+ marketplac
