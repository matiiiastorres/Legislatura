const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagenlight')

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{

        aparecerImagen(imagen.getAttribute('src'))
        
    })
        
})


const aparecerImagen = (imagen)=>{
    imagenesLight.scr = imagen;
    contenedorLight.classList.toggle('show')

}




