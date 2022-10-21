//Bloque import



//Bloque Varibles y Constantes



//Bloque Funciones
//Asyncronas
const consultarApi = async () =>{

    try {
        const respuesta = await fetch("https://whispering-wildwood-03076.herokuapp.com/guitarras/")
        
        const resultado = await respuesta.json();
        console.log(resultado)

        listarGuitarras(resultado);

    } catch (error) {
        console.log("Error" + error.message);
    }
}


const listarGuitarras = (resultado) =>{

 
    resultado.forEach((articulo) => {
        //Destructing

        const{id, nombre, descripcion, precio, imagen} = articulo;
        const{url} = imagen;

        const contenedorImagen = document.querySelector(".listado");
        
        console.log(nombre)
        
        contenedorImagen.innerHTML +=`

            <div class="listado-guitarra">
                <img layout="responsive" width="100" height="220" src="${url}" alt="${nombre}>

                <div class="listado-contenido">
                    <h3>${nombre}</h3>
                    <p class="listado-descripcion">${descripcion}</p>
                    <p class="listado-precio">$${precio}</p>
                    <a data-guitarra="${id}" class="listado-enlace" href="guitarra.html?id=${id}">
                        Ver producto
                    </a>

                </div>
            </div>
                        
                        
        `;

    });

   
}

//Programa Principal

consultarApi();