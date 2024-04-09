import { type ExtensionContext, StatusBarAlignment, Uri, commands, env, l10n, window, workspace } from 'vscode'
import { EXTENSION_ID, EXTENSION_NAME } from './constants'
import type { CustomQuickPickItem } from './types'
import { Context } from './context'
import { UpperCaseFirstLetter, getIcon } from './utils'

export function activate(ext: ExtensionContext) {
  const context = new Context()

  ext.subscriptions.push(
    workspace.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration(EXTENSION_ID))
        context.readConfiguration()
    }),

    commands.registerCommand(`${EXTENSION_ID}.showLinks`, async () => {
      const options: CustomQuickPickItem[] = context.links.map(link => ({
        label: l10n.t('{icon}  Open in {name}', {
          icon: getIcon(link),
          name: UpperCaseFirstLetter(link.name),
        }),
        detail: decodeURIComponent(link.url),
        value: link.url,
      }))

      const selectedOption = await window.showQuickPick(options, {
        placeHolder: l10n.t('Select a link associated with the current workspace...'),
      })

      if (selectedOption) {
        const uri = Uri.parse(selectedOption.value)
        env.openExternal(uri)
      }
    }),
  )

  const statusBar = window.createStatusBarItem(StatusBarAlignment.Left, 0)
  statusBar.command = `${EXTENSION_ID}.showLinks`
  statusBar.text = `$(ports-open-browser-icon) ${EXTENSION_NAME}`
  statusBar.tooltip = l10n.t('Open links associated with the current workspace...')
  statusBar.show()
}

export function deactivate() {

}
