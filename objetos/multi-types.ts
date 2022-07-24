
(() => {
    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }

    let myCustomVariable: (string | number | Hero) = 'Fernando';   
    console.log( typeof myCustomVariable );

    myCustomVariable = 20;
    console.log( typeof myCustomVariable );

    myCustomVariable = {
        name: 'Fernando', 
        age: 25, 
        powers: ['Inteligente', 'Perseverante']
    };
    console.log( typeof myCustomVariable );
})();