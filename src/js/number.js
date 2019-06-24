function number() {
    var dom = document.createElement('div')
    dom.innerHTML = 2000;
    dom.setAttribute('id','number')
    document.body.appendChild(dom);   
}

export default number;