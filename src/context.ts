import { workspace } from 'vscode'
import type { LinkItem } from './types'
import { EXTENSION_ID } from './constants'
import { getGithubUrl } from './url'

export class Context {
  public cwd: string
  public links: LinkItem[] = []
  public autoScan = false

  constructor() {
    this.cwd = workspace.workspaceFolders![0].uri.fsPath
    this.readConfiguration()
  }

  readConfiguration() {
    const config = workspace.getConfiguration(EXTENSION_ID)
    this.links = config.get<LinkItem[]>('links') || []
    this.autoScan = config.get<boolean>('autoScan') || false
    this.formatLinks()
  }

  async formatLinks() {
    if (!this.autoScan)
      return

    if (this.links.some(link => link.name.toLowerCase() === 'github'))
      return

    const githubUrl = await getGithubUrl(this.cwd)
    if (githubUrl) {
      this.links.unshift({
        name: 'gitHub',
        url: githubUrl,
      })
    }
  }
}
