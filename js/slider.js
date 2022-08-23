(function(){
    const sliders = [...document.querySelectorAll('.description_body')];
    const after = document.querySelector('#next');
    const before = document.querySelector('#before');
    let value;

    // document.querySelector('#after').addEventListener('click', ()=>{
    //     document.querySelector('#after').style.transform = 'scale(2)';
    // });

    after.addEventListener('click', ()=>position(1));

    before.addEventListener('click', ()=>position(-1));

    function position(change){
        const currentElement = Number(document.querySelector('.description_body--show').dataset.id);
        // 4+1 = 5
        value = currentElement;
        value+= change;

        console.log(sliders.length)
        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[currentElement-1].classList.toggle('description_body--show');
        sliders[value-1].classList.toggle('description_body--show');
    }
})()