
(() => {
    class Avenger {
        constructor(
            public name: string,
            public realName: string
        ) { 
            console.log('Constructor Avenger llamado');
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
            console.log('Constructor Xmen llamado')
        }

        getFullNameXmen() {
            
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);

})();