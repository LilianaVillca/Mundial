var nombres = [];
            var edades = [];
            var goles = [];
            var partidosquelleva = [];
            var ultimomundial = [];
 
            var txt_nombres = localStorage.getItem("ls_nombres");
            if(txt_nombres){
                var nombres = JSON.parse(txt_nombres);
            }else{
                var nombres = [];
            }
 
            var txt_edades = localStorage.getItem("ls_edades");
            if(txt_edades){
                var edades = JSON.parse(txt_edades);
            }else{
                var edades = [];
            }

            var txt_goles = localStorage.getItem("ls_goles");
            if(txt_goles){
                var goles = JSON.parse(txt_goles);
            }else{
                var goles = [];
            }

            var txt_partidosquelleva = localStorage.getItem("ls_partidosquelleva");
            if(txt_partidosquelleva){
                var partidosquelleva = JSON.parse(txt_partidosquelleva);
            }else{
                var partidosquelleva = [];
            }
 
            var txt_ultimomundial = localStorage.getItem("ls_ultimomundial");
            if(txt_ultimomundial){
                var ultimomundial = JSON.parse(txt_ultimomundial);
            }else{
                var ultimomundial = [];
            }
 
            listarTodo();
            
            function listarTodo(){
                str = "";
                for(var i=0 ; i<nombres.length ; i++){
                    str = str + "<p>"+i+" - "+nombres[i]+" - "+edades[i]+" - "+goles[i]+" - "+partidosquelleva[i]+" - "+ultimomundial[i]+"</p>"
                }
                document.getElementById("salida").innerHTML = str;
 
                localStorage.setItem("ls_nombres",JSON.stringify(nombres));
                localStorage.setItem("ls_edades",JSON.stringify(edades));
                localStorage.setItem("ls_goles",JSON.stringify(goles));
                localStorage.setItem("ls_partidosquelleva",JSON.stringify(partidosquelleva));
                localStorage.setItem("ls_ultimomundial",JSON.stringify(ultimomundial));
            }
            listarTodo();

            // function vectoresOcultos(){
            //   document.getElementById("salida").style.display= 'none'
            // }
            function vectoresOcultos(){
                document.getElementById("salida").innerHTML= " "
            }

            function boton(){
                localStorage.setItem(JSON.stringify(A=false));
            }
 
            function eliminarUno(){
                var paraEliminar = document.getElementById('nroElem').value;
                nombres.splice(paraEliminar,1);
                edades.splice(paraEliminar,1);
                goles.splice(paraEliminar,1);
                partidosquelleva.splice(paraEliminar,1);
                ultimomundial.splice(paraEliminar,1);
                listarTodo();
            }
 
            function eliminarTodos(){
                var bool_eliminar = document.getElementsByName('mundialistas');
                console.log(bool_eliminar[0].checked);
                var b_elim = bool_eliminar[0].checked;
                for(var i=0 ; i<nombres.length ; i++){
                    if(ultimomundial[i]== b_elim){
                        nombres.splice(i,1);
                        edades.splice(i,1);
                        goles.splice(i,1);
                        partidosquelleva.splice(i,1);
                        ultimomundial.splice(i,1);
                    }
                }
                listarTodo();
            }
 
            function agregar(){
                var miNombre = document.getElementById('nombre').value;
                var miEdad = document.getElementById('edad').value;
                var miGoles = document.getElementById('goles').value;
                var miPartidosquelleva = document.getElementById('partidosquelleva').value;
                var miUltimoMundial = document.getElementsByName('UntimoMundial')[0].checked;
                console.log(miNombre,miEdad,miGoles, miPartidosquelleva,miUltimoMundial);
                nombres.push(miNombre);
                edades.push(miEdad);
                goles.push(miGoles);
                partidosquelleva.push(miPartidosquelleva);
                ultimomundial.push(miUltimoMundial);
                listarTodo();
            }
 
            function ascendente(){
                var bandera,aux;
                do{
                    bandera = false;
                    for(var i=0 ; i<nombres.length - 1 ; i++){
                        if(edades[i]>edades[i+1]){
                            console.log(edades[i]+" "+edades[i+1]);
                            aux = edades[i];
                            edades[i] = edades[i+1];
                            edades[i+1]= aux;
                            bandera = true;
 
                            aux = nombres[i];
                            nombres[i]= nombres[i+1];
                            nombres[i+1]=aux;

                            aux = goles[i];
                            goles[i] = goles[i+1];
                            goles[i+1]= aux;

                            aux = partidosquelleva[i];
                            partidosquelleva[i] = partidosquelleva[i+1];
                            partidosquelleva[i+1]= aux;
 
                            aux = ultimomundial[i];
                            ultimomundial[i]= ultimomundial[i+1];
                            ultimomundial[i+1]=aux;
                        }
                    }
                }while(bandera);
                listarTodo();
            } 
 
            function descendente(){
                var bandera,aux;
                do{
                    bandera = false;
                    for(var i=0 ; i<nombres.length - 1 ; i++){
                        if(edades[i]<edades[i+1]){
                            console.log(edades[i]+" "+edades[i+1]);
                            aux = edades[i];
                            edades[i] = edades[i+1];
                            edades[i+1]= aux;
                            bandera = true;
 
                            aux = nombres[i];
                            nombres[i]= nombres[i+1];
                            nombres[i+1]=aux;

                            aux = nombres[i];
                            nombres[i]= nombres[i+1];
                            nombres[i+1]=aux;

                            aux = goles[i];
                            goles[i] = goles[i+1];
                            goles[i+1]= aux;

                            aux = partidosquelleva[i];
                            partidosquelleva[i] = partidosquelleva[i+1];
                            partidosquelleva[i+1]= aux;
 
                            aux = ultimomundial[i];
                            ultimomundial[i]= ultimomundial[i+1];
                            ultimomundial[i+1]=aux;
                        }
                    }
                }while(bandera);
                listarTodo();
            } 
            function ascendente2(){
                var bandera,aux;
                do{
                    bandera = false;
                    for(var i=0 ; i<nombres.length - 1 ; i++){
                        if(goles[i]>goles[i+1]){
                            console.log(goles[i]+" "+goles[i+1]);
                            aux = goles[i];
                            goles[i] = goles[i+1];
                            goles[i+1]= aux;
                            bandera = true;
 
                            aux = nombres[i];
                            nombres[i]= nombres[i+1];
                            nombres[i+1]=aux;

                            aux = edades[i];
                            edades[i] = edades[i+1];
                            edades[i+1]= aux;

                            aux = partidosquelleva[i];
                            partidosquelleva[i] = partidosquelleva[i+1];
                            partidosquelleva[i+1]= aux;
 
                            aux = ultimomundial[i];
                            ultimomundial[i]= ultimomundial[i+1];
                            ultimomundial[i+1]=aux;
                        }
                    }
                }while(bandera);
                listarTodo();
            } 
 
            function descendente2(){
                var bandera,aux;
                do{
                    bandera = false;
                    for(var i=0 ; i<nombres.length - 1 ; i++){
                        if(goles[i]<goles[i+1]){
                            console.log(goles[i]+" "+goles[i+1]);
                            aux = goles[i];
                            goles[i] = goles[i+1];
                            goles[i+1]= aux;
                            bandera = true;

                            aux = edades[i];
                            edades[i] = edades[i+1];
                            edades[i+1]= aux;

                            aux = nombres[i];
                            nombres[i]= nombres[i+1];
                            nombres[i+1]=aux;

                            aux = partidosquelleva[i];
                            partidosquelleva[i] = partidosquelleva[i+1];
                            partidosquelleva[i+1]= aux;
 
                            aux = ultimomundial[i];
                            ultimomundial[i]= ultimomundial[i+1];
                            ultimomundial[i+1]=aux;
                        }
                    }
                }while(bandera);
                listarTodo();
            } 
            function consulta1(){
                var bandera,aux;
                str = " ";
                do{
                    bandera = false;
                    for(var i=0 ; i<nombres.length - 1 ; i++){
                        if(goles[i]<goles[i+1]){
                            console.log(goles[i]+"  "+goles[i+1]);
                            aux = goles[i];
                            goles[i] = goles[i+1];
                            goles[i+1]= aux;
                            bandera = true;
 
                            aux = nombres[i];
                            nombres[i]= nombres[i+1];
                            nombres[i+1]=aux;

                            aux = edades[i];
                            edades[i]= edades[i+1];
                            edades[i+1]=aux;
                    
                            aux = partidosquelleva[i];
                            partidosquelleva[i]= partidosquelleva[i+1];
                            partidosquelleva[i+1]=aux;
 
                            aux = ultimomundial[i];
                            ultimomundial[i]= ultimomundial[i+1];
                            ultimomundial[i+1]=aux;

                        }
                    }
                }while(bandera);
                for(var i=0 ; i<3 ; i++){
                    str = str + "<p>"+" - "+nombres[i]+" - "+edades[i]+" - "+goles[i]+" - "+partidosquelleva[i]+" - "+ultimomundial[i]+"</p>";
                }
                document.getElementById("consulta1").innerHTML = str;
            }

            function consulta2(){
               let bandera=true;
               ordenMa="";
               while (bandera==true){
               bandera=false;
               for(let i=0;i<nombres.length-1;i++){
  	
	             if (partidosquelleva[i]>partidosquelleva[i+1]){
        
		let aux=partidosquelleva[i];
  	    let auxx=nombres[i];
  	   // let auxxx=altura[i]; 
  	   // let auxxxx=argentino[i];
		
		partidosquelleva[i]=partidosquelleva[i+1];
		nombres[i]=nombres[i+1];
		//altura[i]=altura[i+1];
		//argentino[i]=argentino[i+1];

		partidosquelleva [i+1]=aux; 
		nombres[i+1]=auxx; 
		//altura[i+1]=auxxx; 
		//argentino[i+1]=auxxxx;

		bandera=true;	
	} 
  }
} 
 for (let i=0;i=3;i++){
	ordenMa+="<p>"+nombres[i]+" "+ partidosquelleva[i]+ "<p>";
}document.getElementById('consulta2').innerHTML =ordenMa; }


            function consulta3(){
                var q_ultimacopa= " ";
                for(var i=0; i<(ultimomundial.length); i++){
                    if (ultimomundial[i]==true){
                         q_ultimacopa= q_ultimacopa+"<p>"+nombres[i]+" - "+ultimomundial[i]+"</p>";
                    }
                }
                q_ultimacopa= "<p>"+q_ultimacopa+"</p>";
                document.getElementById('consulta3').innerHTML= q_ultimacopa;
            }
            function consulta4(){
                var q_ultimacopa= " ";
                for(var i=0; i<(ultimomundial.length); i++){
                    if (ultimomundial[i]== false){
                         q_ultimacopa= q_ultimacopa+"<p>"+nombres[i]+" - "+ ultimomundial[i]+"</p>";
                    }
                }
                q_ultimacopa= "<p>"+q_ultimacopa+"</p>";
                document.getElementById('consulta4').innerHTML= q_ultimacopa;
            }

            function consulta5(){
                // promedio de edades
                var contador=0
                var acumulador=0

                for(var i=0; nombres.length; i++){
                    contador=contador+1
                    acumulador=acumulador+edades[i]
                }
                Document.getElementById('consulta5').innerHTML=("El promedio de edad es "+ [acumulador/contador]);


            }
