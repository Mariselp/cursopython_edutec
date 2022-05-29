/**window.addEventListener("load",function(){
    let formulario =document.querySelector("form.formulario")
    formulario.addEventListener("submit", function(e){
        
        let errores=[]

        let campoNombre = document.querySelector("input.nombre")
        if(campoNombre.value== ""){
            errores.push("El campo nombre no puede estar vacío")
        }else if(campoNombre.value.length<3){
            errores.push("El campo nombre tiene que tener al menos 3 caracteres")
        }

        let campoApellido = document.querySelector("input.apellido")
        if(campoApellido.value== ""){
            errores.push("El campo apellido no puede estar vacío")
        }else if(campoApellido.value.length<3){
            errores.push("El campo apellido tiene que tener al menos 3 caracteres")
        }

        let campoColegio = document.querySelector("input.colegio")
        if(campoColegio.value== ""){
            errores.push("El campo colegio no puede estar vacío")
        }else if(campoColegio.value.length<3){
            errores.push("El campo colegio tiene que tener al menos 3 caracteres")
        }

        let campoCurso = document.querySelector("input.curso")
        if(campoCurso.value== ""){
            
            errores.push("El campo curso no puede estar vacío")
        }else if(campoCurso.value.length>15){
            errores.push("El campo curso tiene un maximo de 15 caracteres")
        }

        let campoMail = document.querySelector("input.mail")
        if(campoMail.value== ""){
            
            errores.push("El campo mail no puede estar vacío")
        }else if(campoMail.value.length<3){
            errores.push("El campo mail tiene que tener al menos 3 caracteres")
        }

        let campoPregunta = document.querySelector("textarea.pregunta")
        if(campoPregunta.value== ""){
            
            errores.push("El campo de pregunta no puede estar vacío")
        }else if(campoPregunta.value.length<10){
            errores.push("El campo tiene que tener al menos 10 caracteres")
        }
        
        let ulErrores = document.querySelector("div.errores ul");
        if( errores.length>0){
            e.preventDefault()
            for (let i = 0; i < errores.length; i++) { 
             
                ulErrores.innerHTML += "<li>"+errores[i]+"</li>"
                
                
            }
           
        }
        
    })
}) */
 window.addEventListener("load",function(){
    let formulario =document.querySelector("form.formulario")
    formulario.addEventListener("submit", function(e){
   

        let campoNombre = document.querySelector("input.nombre")
        if(campoNombre.value== ""){
           alert("El campo nombre no puede estar vacío")
        }else if(campoNombre.value.length<3){
            alert("El campo nombre tiene que tener al menos 3 caracteres")
        }

        let campoApellido = document.querySelector("input.apellido")
        if(campoApellido.value== ""){
            alert("El campo apellido no puede estar vacío")
        }else if(campoApellido.value.length<3){
            alert("El campo apellido tiene que tener al menos 3 caracteres")
        }

        let campoColegio = document.querySelector("input.colegio")
        if(campoColegio.value== ""){
            alert("El campo colegio no puede estar vacío")
        }else if(campoColegio.value.length<3){
            alert("El campo colegio tiene que tener al menos 3 caracteres")
        }

        let campoCurso = document.querySelector("input.curso")
        if(campoCurso.value== ""){
            
            alert("El campo curso no puede estar vacío")
        }else if(campoCurso.value.length>15){
            alert("El campo curso tiene un maximo de 15 caracteres")
        }

        let campoMail = document.querySelector("input.mail")
        if(campoMail.value== ""){
            
            alert("El campo mail no puede estar vacío")
        }else if(campoMail.value.length<3){
            alert("El campo mail tiene que tener al menos 3 caracteres")
        }

        let campoPregunta = document.querySelector("textarea.pregunta")
        if(campoPregunta.value== ""){
            
            alert("El campo de pregunta no puede estar vacío")
        }else if(campoPregunta.value.length<10){
            alert("El campo pregunta tiene que tener al menos 10 caracteres")
        }
        e.preventDefault()
    })
})