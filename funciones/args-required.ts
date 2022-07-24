
(() => {
    const fullName = ( firstName: string, lastName: string ): string => {
        return `${ firstName } ${ lastName }`;
    }

    const user = fullName('Fernando', 'Nicolás');
    console.log(user);

    const frase = ( phrase: string = 'Mensaje' ): string => {
        return `${ phrase }`;
    }

    const prueba = frase();
    console.log(prueba);
})();