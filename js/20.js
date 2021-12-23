//

const reproductor ={
    reproducir : function(id){
        console.log(`reproduciendo canción con el ID: ${id}`);
    },
    pausar : function(){
        console.log('Pausando...')
    },
    crearPlaylist : function(nombre){
        console.log(`Creando la PlayList: ${nombre}`)
    },

    reproducirPlaylist : function(nombre){
        console.log(`Repreduciendo: ${nombre}`)
    }
}
/* console.log(reproductor) */

reproductor.borrarCancion = function(id){
    console.log(`Eliminando la canción ${id}`)
}


reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(8887);


reproductor.crearPlaylist('Mujer amarte');
reproductor.reproducirPlaylist('Mujer amarte');

