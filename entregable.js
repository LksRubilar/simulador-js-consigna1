//variables
let total=0;
let totalProducto1=0;
let totalProducto2=0;
let totalProducto3=0;
let estado=1;


//funcion
function TipoProducto (producto, cantidad) {  
  
    if (producto==1) {
        totalProducto1 = totalProducto1 + (45990*cantidad);
        return total = total + totalProducto1;
        
    } else if (producto==2) {
        totalProducto2 = totalProducto2 + (24990*cantidad);
        return total = total + totalProducto2;
       
        
    }else if (producto==3) {
        totalProducto3 = totalProducto3 + (18990*cantidad);
        return total = total + totalProducto3;
        
    } else {
        alert('No es un producto valido ', 'valor total');
        return total;
    }
            
}

do {  
  
    producto= prompt('Bienvenido\n Por favor selecciones el numero correspondiente a su producto: \n 1- Polera \n 2- Pantalon\n 3- Poleron');

    cantidad= prompt('Ingrese la cantidad de unidades que desea comprar');
    TipoProducto(producto, cantidad);  

    //repetir ciclo
    estado= prompt('¿desea agregar mas productos?\n seleccione: \n 1 para si\n 2 para no');
} while (estado==1)//Condicion de repeticion
//salida
alert('El total de su compra es: '+ total);

