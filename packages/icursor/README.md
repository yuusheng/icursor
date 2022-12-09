<p align="center">
<img src="https://raw.githubusercontent.com/yuusheng/icursor/5d395eaf1ecb9382d28c294977c02e82ce18d0dd/playground/public/iCursor.svg" style="width:100px;" />
</p>

<p align="center">
Helping you to curstomize your cursor in web looks like cursor in iPad.
</p>


:construction:



## Usage

```bash
npm i icursor
```

```js
import 'icursor/main.css'
import { createCursor } from 'icursor'

// not stable! API could be change at any time
// only support class selector right now
createCursor('.btn')
```

`createCursor` will generate an iCursor, which can fuse into the element that has `btn` class

or you can customize your iCursor style, when cursor hover on element with class `btn`, it will have the style of `btn-class`

```js
import 'icursor/main.css'
import { createCursor } from 'icursor'

createCursor({ '.btn': 'btn-class' })
```

> You should import `icursor/main.css` as early as possible, or at least import `icursor/main.css` before your custom stylesheet to make sure that your own css can work.

## Todo
- refactor cursor inner with canvas or maybe svg
