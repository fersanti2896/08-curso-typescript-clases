
(() => {
    abstract class Mutante {
        constructor(
            public name: string, 
            public realName: string
        ) { }
    }

    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo Salvado!';
        }
    }

    class Villian extends Mutante {
        conquistarMundo() {
            return 'Mundo Conquistado!';
        }
    }

    const deadpool = new Xmen('Deadpool', 'Wade Wilson');
    // console.log( deadpool.salvarMundo() )

    const magneto = new Villian('Magneto', 'Erik Lehnsherr');
    // console.log( magneto.conquistarMundo() );

    const printName = ( character: Mutante ) => {
        // console.log( character.realName );
    }

    printName( magneto );
})();