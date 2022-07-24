"use strict";
(() => {
    const a = 10;
    console.log(a);
})();
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        return upper ? `${firstName} ${lastName || 'No lastName'}`.toUpperCase()
            : `${firstName} ${lastName || 'No lastName'}`;
    };
    const name = fullName('Fernando', 'Santiago');
    console.log(name);
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'No lastname'}`;
    };
    const user = fullName('Fernando');
    console.log(user);
    const frase = (phrase = 'Mensaje') => {
        return `${phrase}`;
    };
    const prueba = frase();
    console.log(prueba);
    const suma = (numOne, numTwo) => {
        return numOne + numTwo || 0;
    };
    const result = suma(1);
    console.log(result);
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const user = fullName('Fernando', 'Nicolás');
    console.log(user);
    const frase = (phrase = 'Mensaje') => {
        return `${phrase}`;
    };
    const prueba = frase();
    console.log(prueba);
})();
(() => {
    const hero = 'Flash';
    function returnName(hero) {
        return hero;
    }
    console.log(returnName(hero));
    const activateBatiSignal = () => {
        return 'Batiseñal activada!';
    };
    console.log(activateBatiSignal());
    const heroName = returnName(hero);
    console.log({ heroName });
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const hero = fullName('Tony', 'Stark', 'IroMan');
    console.log(hero);
})();
(() => {
    function sumar(a, b) {
        return a + b;
    }
    console.log(`Suma: ${sumar(1, 2)}`);
    const contar = (heroes) => {
        return heroes.length;
    };
    const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    console.log(`Número de Heróes: ${contar(superHeroes)}`);
    const llamarBatman = (llamar = false) => {
        if (llamar) {
            console.log("Batiseñal activada");
        }
    };
    llamarBatman(true);
    const unirheroes = (...personas) => {
        return personas.join(' ');
    };
    const lastName = 'Son';
    const name = 'Gokú';
    console.log(unirheroes(lastName, name));
    const noHaceNada = (numero, texto, booleano, arreglo) => { };
    let noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
    console.log({ noHaceNadaTampoco });
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}!`;
    const saveTheWorld = () => 'El mundo está salavado!';
    let myFunction;
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('Fernando'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(() => {
    let myCustomVariable = 'Fernando';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Fernando',
        age: 25,
        powers: ['Inteligente', 'Perseverante']
    };
    console.log(typeof myCustomVariable);
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo']
    };
    flash = {
        name: 'Clark Kent',
        age: 45,
        powers: ['Super Fuerza', 'Visión aumentada']
    };
    console.log({ flash });
    let batman = {
        name: 'Bruce Wayne',
        age: 48,
        powers: ['Super Traje'],
        getName() {
            return this.name;
        }
    };
    console.log(batman);
    let thor = {
        name: 'Thor Odinson',
        age: 35,
        powers: ['Super Fuerza', 'Rayos', 'Milholdir'],
        getName() {
            return this.name;
        }
    };
    console.log(thor);
})();
(() => {
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4,
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        },
    };
    console.log(batimovil);
    console.log(bumblebee);
    const villanos = [
        {
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false,
        },
        {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true,
        },
        {
            nombre: "James Logan",
            edad: undefined,
            mutante: true,
        },
    ];
    const charles = {
        poder: "psiquico",
        estatura: 1.78,
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
    };
    let mystique;
    mystique = charles;
    console.log(typeof mystique, mystique);
    mystique = apocalipsis;
    console.log(typeof mystique, mystique);
})();
(() => {
    let batman = {
        name: 'Bruce Wayne',
        powers: ['Super Traje']
    };
    console.log(batman);
    let thor = {
        name: 'Thor Odinson',
        age: 35,
        powers: ['Super Fuerza', 'Rayos', 'Milholdir'],
        getName() {
            return this.name;
        }
    };
    console.log(thor);
})();
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = 'Dr. Strange';
    console.log(avenger.charAt(1));
    avenger = 253.2124;
    console.log(avenger.toFixed(2));
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(() => {
    const numbers = [16, 17, '18', 19, 20];
    numbers.push(true);
    console.log(numbers);
    const fruits = ['Manzana', 'Sandía', 'Pera'];
    fruits.push('Mandarina');
    console.log(fruits);
    const villian = ['Dormammu', 'Thanos', 'Kang el Conquistador'];
    villian.forEach(v => console.log(v.toUpperCase()));
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = true && true;
    console.log(isSuperman);
    console.log(isBatman);
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    const currentAudio = AudioLevel.max;
    console.log(AudioLevel);
    console.log(currentAudio);
})();
(() => {
    const error = (msg) => {
        throw new Error(msg);
    };
    error('Auxilio!');
})();
(() => {
    const valor1 = null;
    const valor2 = undefined;
    console.log(`${valor1}`);
    console.log(`${valor2}`);
})();
(() => {
    let avengers = 10;
    console.log(avengers);
    const villans = 20;
    if (avengers < villans) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Estamos salvados');
    }
    avengers = Number('54E');
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Héroe: Volcan Negro`;
    console.log(`Yo soy ${batman}`);
    console.log(linternaVerde.toUpperCase());
    console.log(((_a = volcanNegro[9]) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || 'No está presente');
})();
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    console.log({ batman, superman, existe });
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    console.log({ parejaHeroes, villano });
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    console.log({ aliados });
    let SuperHero;
    (function (SuperHero) {
        SuperHero[SuperHero["aquaman"] = 0] = "aquaman";
        SuperHero[SuperHero["batman"] = 1] = "batman";
        SuperHero[SuperHero["flash"] = 5] = "flash";
        SuperHero[SuperHero["superman"] = 100] = "superman";
    })(SuperHero || (SuperHero = {}));
    const fuerzaFlash = SuperHero.flash;
    const fuerzaSuperman = SuperHero.superman;
    const fuerzaBatman = SuperHero.batman;
    const fuerzaAquaman = SuperHero.aquaman;
    console.log({ fuerzaFlash, fuerzaSuperman, fuerzaBatman, fuerzaAquaman });
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    console.log(activar_batiseñal());
    pedir_ayuda();
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log({ largoDelPoder });
    let enumeracion;
    (function (enumeracion) {
        enumeracion[enumeracion["a"] = 10] = "a";
        enumeracion[enumeracion["b"] = 11] = "b";
        enumeracion[enumeracion["c"] = 9] = "c";
        enumeracion[enumeracion["d"] = 10] = "d";
    })(enumeracion || (enumeracion = {}));
    console.log({ enumeracion });
})();
(() => {
    const dbz = ['Capitan Ginyu', 80000, false];
    dbz[0] = 'Goku';
    dbz[1] = 180000;
    dbz[2] = true;
    console.log(dbz);
})();
(() => {
    function callGoku() {
        return;
    }
    const callVegeta = () => {
        return;
    };
    const a = callGoku();
    console.log(a);
    const b = callVegeta();
    console.log(b);
})();
//# sourceMappingURL=main.js.map