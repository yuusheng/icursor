# iCursor

(_WIP_)

This package is helping you to curstomize your cursor in web looks like cursor in iPad

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

or you can customize your cursor style, when cursor hover on element with class `btn`, it will have the style of `btn-class`

```js
import 'icursor/main.css'
import { createCursor } from 'icursor'

createCursor({ '.btn': 'btn-class' })
```
> you should import `icursor/main.css` as early as possible, or at least import `icursor/main.css` before your custom stylesheet to make sure that your own css can work.
