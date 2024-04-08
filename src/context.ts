import { workspace } from 'vscode'
import type { LinkItem } from './types'
import { EXTENSION_ID } from './constants'

export class Context {
  public links: LinkItem[] = []

  constructor() {
    this.readConfiguration()
  }

  readConfiguration() {
    const config = workspace.getConfiguration(EXTENSION_ID)
    this.links = config.get<LinkItem[]>('links') || []
  }
}
