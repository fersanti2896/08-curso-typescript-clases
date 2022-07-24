"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName, avgAge = 35) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            Avenger.avgAge = avgAge;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Ant Man', 'Captain');
    console.log(antman);
})();
//# sourceMappingURL=main.js.map