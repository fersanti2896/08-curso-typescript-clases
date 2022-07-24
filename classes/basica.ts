
(() => {
    class Avenger {
        static avgAge: number = 35;
        static getAvgAge() {
            return this.name;
        }

        constructor( 
            private name: string, 
            public team: string, 
            public realName?: string, 
            avgAge: number = 35
        ) { 
            Avenger.avgAge = avgAge;    
        }

        /* Métodos públicos y privados */
        public bio( ): string {
            return `Hero: ${ this.name } Equipo: ${ this.team }`; 
        }
    }

    const antman: Avenger = new Avenger('Ant Man', 'Captain');
    // console.log( antman );

    // console.log( antman.bio() )
    // console.log( Avenger.getAvgAge() )
})();