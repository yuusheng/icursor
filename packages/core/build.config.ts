import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
    'src/cursor',
    'src/types',
    'src/utils.ts',
  ],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
  },
})
