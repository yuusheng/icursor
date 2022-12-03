import Cursor from './cursor'

const body = document.querySelector('body')

const cursorInner = document.createElement('div')
cursorInner.classList.add('cursor__inner')
const cursor = document.createElement('div')
cursor.classList.add('cursor')
cursor.append(cursorInner)
body?.append(cursor)

new Cursor()
export default Cursor
