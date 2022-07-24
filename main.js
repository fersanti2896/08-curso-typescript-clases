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
        getFullNameXmen() {
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
})();
//# sourceMappingURL=main.js.map