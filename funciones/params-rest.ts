
(() => {
    const fullName = (firstName: string, ...restArgs: string[]): string => {
        return `${ firstName } ${ restArgs.join(' ') }`;
    }

    const hero = fullName('Tony', 'Stark', 'IroMan');
    console.log(hero);
})();