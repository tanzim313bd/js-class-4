document.querySelector('button').addEventListener('click', function(){
    document.querySelector('form').classList.toggle('show');

})
document.querySelector('button').addEventListener('click', function(){
        document.querySelector('h1').innerText = 'Welcome to JavaScipt';
    document.querySelector('h1').style.color = 'DimGray';
})
let time = document.querySelector('.time');
let show_date = document.querySelector('.show_date');

time.addEventListener('click', function(){
    show_date.value = (new Date());
})

let value = document.querySelector('.value');
let get_value = document.querySelector('.get_value');

value.addEventListener('click', function(){
    get_value.value = (Math.PI);
})

let get_id = document.querySelector('.get_id');
let get_idNum = document.querySelector('.get_idNum');

get_id.addEventListener('click', function(){
    get_idNum.value = (Math.random()*100+1);
})

let get_num = document.querySelector('.get_num');
let get_roundNum = document.querySelector('.get_roundNum');

get_num.addEventListener('click', function(){
    get_roundNum.value = (Math.round(Math.random()* 100+1));
})

//document.querySelector('time').addEventListener('click', function(){
    //show_date.value = (new Date());
//})
//document.write(Math.round(Math.random()* 100+1)); 

//document.querySelector('time')