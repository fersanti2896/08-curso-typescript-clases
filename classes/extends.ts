
(() => {
    class Avenger {
        constructor(
            public name: string,
            public realName: string
        ) { 
            // console.log('Constructor Avenger llamado');
        }

        private getFullName() {
            return `${ this.name } ${ this.realName }`;
        }
    }

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutante: boolean
        ) { 
            super(name, realName);
            // console.log('Constructor Xmen llamado')
        }

        get fullName() {
            return `${ this.name } - ${ this.realName }`;
        }

        set fullName( name: string ) {
            if( name.length < 2 ) {
                throw new Error('El nombre debe tener más de 3 caracteres!');
            }

            this.name = name;
        }

        getFullNameXmen() {
        
        }
    }

    const wolwerine = new Xmen('Wolverine', 'Logan', true);
    wolwerine.fullName = 'Fer'

    // console.log( `Get: ${ wolwerine.fullName }` )

})();