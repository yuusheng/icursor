# IOS Cursor

(_WIP_)

this package is helping you to curstomize your cursor in web looks like cursor in iPad

## Usage

```bash
npm i ios-cursor
```

```js
import { createCursor } from 'ios-cursor'

// not stable! API could be change at any time
// only support class selector right now
createCursor('.btn')
```

or you can customize your cursor style, when cursor hover on element with class `btn`, it will have the style of `btn-class`

```js
import { createCursor } from 'ios-cursor'

createCursor({ '.btn': 'btn-class' })
```
