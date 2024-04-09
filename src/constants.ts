export const EXTENSION_NAME = 'Open in XX'
export const EXTENSION_ID = 'open-in-xx'
export const ICON_DEFAULT = '$(link-external)'

export const ICONS_MAP: Record<string, string> = {
  // code hosting platforms
  github: '$(github)',
  gitlab: '$(icon-gitlab)',
  gitee: '$(icon-gitee)',

  // Document hosting platforms
  yuque: '$(icon-yuque)',
  feishu: '$(icon-feishu)',

  // Package hosting platforms
  npm: '$(icon-npm)',
  pypi: '$(icon-pypi)',
  maven: '$(icon-maven)',
  tampermonkey: '$(icon-tampermonkey)',
  greasyfork: '$(icon-greasyfork)',
  marketplace: '$(icon-marketplace)',

  // Social media platforms
  bilibili: '$(icon-bilibili)',
  youtube: '$(icon-youtube)',
  discord: '$(icon-discord)',
  twitter: '$(icon-twitter)',
  x: '$(icon-x)',
  facebook: '$(icon-facebook)',
  tieba: '$(icon-tieba)',

  // others
  dockerhub: '$(icon-dockerhub)',
  netlify: '$(icon-netlify)',
}
