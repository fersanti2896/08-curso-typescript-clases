"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName, avgAge = 35) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            Avenger.avgAge = avgAge;
        }
        static getAvgAge() {
            return this.name;
        }
        bio() {
            return `Hero: ${this.name} Equipo: ${this.team}`;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Ant Man', 'Captain');
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Avenger llamado');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutante) {
            super(name, realName);
            this.isMutante = isMutante;
            console.log('Constructor Xmen llamado');
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 2) {
                throw new Error('El nombre debe tener más de 3 caracteres!');
            }
            this.name = name;
        }
        getFullNameXmen() {
        }
    }
    const wolwerine = new Xmen('Wolverine', 'Logan', true);
    wolwerine.fullName = 'Fer';
    console.log(`Get: ${wolwerine.fullName}`);
})();
//# sourceMappingURL=main.js.map