import "@babel/polyfill";

const arr = [
    new Promise(() => {}),
    new Promise(() => {})
]

arr.map((item,index) => console.log(item))