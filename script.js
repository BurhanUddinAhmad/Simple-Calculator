let display = document.getElementById('display');
let btns = document.querySelectorAll('.btn button');

for( let i = 0; i < btns.length; i++ ) {
    let btn = btns[i];

    btn.addEventListener('click', function(n){
        let numb = n.target.innerText;

        if( numb === '=' ){
            let result = eval(display.value);
            display.value = result;
        }else if( numb === 'AC'){
            display.value = '';
        }else{
            //display.value = display.value + numb;
            display.value += numb;
        }
    });
}