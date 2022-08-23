(function(){//funcion autoinvocada para proteger las variables de otros archivos

    const preguntasTitle = [...document.querySelectorAll('.preguntas_title')];
    
    preguntasTitle.forEach(pregunta =>{
        pregunta.addEventListener('click', ()=>{
            let height = 0;
            let respuesta = pregunta.nextElementSibling;//sguiente hermano 
            let addPadding = pregunta.parentElement.parentElement;


            addPadding.classList.toggle('preguntas_padding--add');
            pregunta.children[0].classList.toggle('preguntas_arrow--rotate');

            if(respuesta.clientHeight === 0){
                height = respuesta.scrollHeight;//scrollHeight nos da el alto minio para que un elemento se muestre
            }
            respuesta.style.height = `${height}px`;
        })
    });
})();