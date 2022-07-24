
(() => {
    class Avenger {
        static avgAge: number = 35;

        constructor( 
            private name: string, 
            public team: string, 
            public realName?: string, 
            avgAge: number = 35
        ) { 
            Avenger.avgAge = avgAge;    
        }
    }

    const antman: Avenger = new Avenger('Ant Man', 'Captain');
    console.log( antman );
})();