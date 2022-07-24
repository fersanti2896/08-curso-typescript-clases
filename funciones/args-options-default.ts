

(() => {
    const fullName = ( firstName: string, lastName?: string, upper: boolean = false): string => {

        return upper ? `${ firstName } ${ lastName || 'No lastName' }`.toUpperCase()
                     : `${ firstName } ${ lastName || 'No lastName' }`;
    }

    const name = fullName('Fernando', 'Santiago');
    console.log(name);
})();