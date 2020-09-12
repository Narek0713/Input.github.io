
let but = document.getElementsByTagName('button')[0];
let input = document.getElementsByTagName('input')[0];
let ul = document.createElement('ul');  
let a = 0;
but.addEventListener('click',function(){
    let div =  document.createElement('div');
    div.setAttribute('class','div');
    a++
    div.innerHTML = a + input.value;
    document.body.append(div);
    input.value = '';
});


