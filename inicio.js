function loguear(){

    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("clave").value;

    if(user=="Abel" && pass=="1914"){

        window.location="index4.html";
        
    }

    else{
        alert("Datos incorrectos, intente nuevamente");
    }

}