
(() => {
    const fullName = ( firstName: string, lastName?: string ): string => {
        return `${ firstName } ${ lastName || 'No lastname' }`;
    }

    const user = fullName('Fernando');
    console.log(user);

    const frase = ( phrase: string = 'Mensaje' ): string => {
        return `${ phrase }`;
    }

    const prueba = frase();
    console.log(prueba);

    const suma = ( numOne?: number, numTwo?: number): number => {
        return numOne + numTwo || 0;
    }

    const result = suma(1);
    console.log(result);
})();