import type { QuickPickItem } from 'vscode'

export interface LinkItem {
  name: string
  url: string
  icon?: string
}
export interface CustomQuickPickItem extends QuickPickItem {
  value: string
}
