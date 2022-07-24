
(() => {
    const hero: string = 'Flash';

    function returnName( hero: string ): string {
        return hero;
    }

    console.log( returnName(hero) );

    const activateBatiSignal = (): string => {
        return 'Batiseñal activada!';
    }

    console.log( activateBatiSignal() );

    const heroName: string = returnName( hero );
    console.log({ heroName });
    
})();