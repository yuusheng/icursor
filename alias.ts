import { resolve } from 'path'

const r = (path: string) => resolve(__dirname, path)

export const alias: Record<string, string> = {
  '@icursor/core': r('./packages/core/src/'),
  'icursor': r('./packages/icursor/src/'),
}
