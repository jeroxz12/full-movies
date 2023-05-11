export const getCurrentDate = () => {
    const dateObject = new Date()
      const date = `${dateObject.getDate()}/${dateObject.getMonth()}/${dateObject.getFullYear()}`
      return date
}
export const getTrailer = (data) => {
  return data.find(video => video.type == "Trailer")
}
// *Funcion suma(numero1, numero2) 
//   test1   -Suma correcta de dos numeros
//   test2  -Si la funcion recibe algun dato que no sea numerico como parametro devolver mensaje de datos no validos

export const suma = (numero1, numero2) => {
  if (isNaN(numero1) || isNaN(numero2)) {
    return "Datos no validos";
  } else {
    return numero1 + numero2;
  }
}

// *Funcion filtrarNumeroMasAlto(arrayNumeros)
//   test1   -Devuelve el numero mas alto del array
//   test2  -El array tiene solo numeros

export const filtrarNumeroMasAlto = (arrayNumeros) => {
  if( arrayNumeros.every( number => typeof number === "number" ) ) {
    const masAlto = arrayNumeros.sort((a, b) => b - a)[0];
    return  masAlto
  }
  return 'El parametro no es un arreglo de numeros.';
}

// *Funcion primerLetraMayuscula(string)
//   test1   -Solo puede recibir string
//   test2  -Si recibe alguna dato que no sea string devolver mensaje de datos no validos
//   test3  -Cada palabra del texto del string debe empezar con mayuscula ej : "Hola Soy Un Texto"

export const primerLetraMayuscula = (string) => {
  if( typeof string === "string"){
  let arrayLetras = string.toLowerCase().split(' ');
  for (let i = 0; i < arrayLetras.length; i++){
    arrayLetras[i] = arrayLetras[i].charAt(0).toUpperCase() + arrayLetras[i].slice(1);
  }
    return arrayLetras.join(' ');
  }
  return 'Datos no validos'
}

// *Funcion cualEsMayor(numero1, numero2)
//   test1   -Solo puede recibir numeros
//   test2  -Si la funcion recibe algun dato que no sea numerico como parametro devolver mensaje de datos no validos
//   test3  -Devuelve el numero mas alto entre numero 1 y 2

export const cualEsMayor = (numero1, numero2) => {
  if (!(typeof numero1 === 'number' && typeof numero2 === 'number')) {
    return "Datos no validos";
  } else {
    console.log(typeof numero2)
    return numero1 > numero2 ? numero1 : numero2;
  }
}
