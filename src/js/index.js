import '../css/index.css'

import counter from './counter'
import number from './number';

// var root = document.getElementById('root')

// var header = document.createElement('div')
// header.innerText = 'head'
// root.appendChild(header)

// var aside = document.createElement('div')
// aside.innerText = 'aside'
// root.appendChild(aside)

var btn = document.createElement('button')
btn.innerText = '增加';

document.body.appendChild(btn);

counter();
number();

if(module.hot){
    module.hot.accept('./number.js',() => {
        document.body.removeChild(document.getElementById('number'));
        number();
    })
}

// btn.onclick = function(){
//     var temp = document.createElement('div');
//     temp.innerHTML = 'item';
//     document.body.appendChild(temp)
// }