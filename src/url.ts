import { exec } from 'node:child_process'

export async function getGithubUrl(cwd: string): Promise<string | undefined> {
  return new Promise((resolve) => {
    exec('git remote -v', { cwd }, (err, stdout) => {
      if (err)
        resolve(undefined)

      const url = stdout.match(/(https:\/\/github\.com\/.*)\.git/)?.[1]
      resolve(url)
    })
  })
}
