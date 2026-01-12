const btn = document.getElementById('btn');
const mobileBtn = document.getElementById('mobileBtn');
const close = document.getElementById('closeBtn');


btn.addEventListener('click',()=>{
    mobileBtn.classList.toggle('hidden')
});

close.addEventListener('click',()=>{
    mobileBtn.classList.add('hidden')
});