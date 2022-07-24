
(() => {
  // Funciones Básicas
  function sumar( a: number, b: number ): number {
    return a + b;
  }

  console.log( `Suma: ${ sumar(1, 2) }` );

  const contar = ( heroes: string[] ): number => {
    return heroes.length;
  }

  const superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
  console.log( `Número de Heróes: ${ contar( superHeroes ) }` );

  //Parametros por defecto
  const llamarBatman = ( llamar: boolean = false ): void => {
    if( llamar ){
      console.log("Batiseñal activada");
    }
  }

  llamarBatman(true);

  // Rest?
  const unirheroes = ( ...personas: string[] ): string => {
    return personas.join(' ');
  }

  const lastName = 'Son';
  const name = 'Gokú';

  console.log( unirheroes(lastName, name) );

  // Tipo funcion
  const noHaceNada = ( numero: number, texto: string, booleano: boolean, arreglo: string[] ): void => {}

  // Crear el tipo de funcion que acepte la funcion "noHaceNada"
  let noHaceNadaTampoco: Function;
  noHaceNadaTampoco = noHaceNada;

  console.log({ noHaceNadaTampoco })
}) ();