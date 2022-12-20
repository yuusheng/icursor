<p align="center">
<img src="https://raw.githubusercontent.com/yuusheng/icursor/5d395eaf1ecb9382d28c294977c02e82ce18d0dd/playground/public/iCursor.svg" style="width:100px;" />
</p>

<p align="center">
Helping you to customize your cursor on the web looks like the cursor on an iPad.
</p>


## Usage

```bash
npm i icursor
```

```js
import 'icursor/main.css'
import { createCursor } from 'icursor'

createCursor('.icursor-round') // `iCursor` will generate a cursor that is rounded when hover on element with 'icursor-round' class

// or if you want rect cursor
createCursor('.icursor-rect') // a rect cursor with 4px border radius

// wanna both?
createCursor(['.icursor-round', '.icursor-rect'])
```

> Note: Due to createCursor has side effect (using `document.createElement` to create two div), this function can only be called once, so you should add all classes you wants when you call it at the first time.

or you can customize your iCursor style, when the cursor hovers over an element with class `btn`, it will have the style of `btn-class`

```js
import 'icursor/main.css'
import { createCursor } from 'icursor'

createCursor({ '.btn': 'btn-class' })
```

> You should import `icursor/main.css` as early as possible, or at least import `icursor/main.css` before your custom stylesheet to make sure that your own css can work.

## Todo
- refactor cursor inner with canvas or maybe SVG
