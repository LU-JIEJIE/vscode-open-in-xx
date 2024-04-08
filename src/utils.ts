import { ICONS_MAP, ICON_DEFAULT } from './constants'
import type { LinkItem } from './types'

export function getIcon(link: LinkItem) {
  const icon = link.icon?.toLowerCase()
  const name = link.name.toLowerCase()
  if (icon && icon in ICONS_MAP)
    return ICONS_MAP[icon]
  else if (name in ICONS_MAP)
    return ICONS_MAP[name]
  else
    return ICON_DEFAULT
}

export function UpperCaseFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
