function counter() {
    var dom = document.createElement('div')
    dom.innerHTML = 1;
    dom.onclick = function() {
        dom.innerHTML =  parseInt(dom.innerHTML,10) + 1;
    }
    document.body.appendChild(dom);   
}

export default counter;