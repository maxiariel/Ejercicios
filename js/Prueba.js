const ejercicio1= (cadena)=>{
  
   if(typeof cadena === 'number'){
     console.log("Esto es un numero, por favor ingrese un texto")
   }else if (typeof cadena ==='boolean'){
    console.log("Esto es un boolean,por favor ingrese un texto")
   }else if(typeof cadena === "string"){
     console.log(`La cantidad de caracteres es ${cadena.length}.`)
   }else{
     console.log("No se ingreso ningun caracter")
   }
  }
   ejercicio1()
  
  

