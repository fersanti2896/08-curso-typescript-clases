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
    console.log(antman);
    console.log(antman.bio());
    console.log(Avenger.getAvgAge());
})();
//# sourceMappingURL=main.js.map