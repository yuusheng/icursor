import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
    'src/cursor',
    'src/types',
  ],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
  },
})
