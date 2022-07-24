
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo']
    }

    flash = {
        name: 'Clark Kent', 
        age: 45,
        powers: ['Super Fuerza', 'Visión aumentada']
    }

    console.log({ flash });

    let batman: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: 'Bruce Wayne',
        age: 48, 
        powers: ['Super Traje'],
        getName() {
            return this.name;
        }
    }

    console.log( batman );

    let thor: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: 'Thor Odinson',
        age: 35, 
        powers: ['Super Fuerza', 'Rayos', 'Milholdir'],
        getName() {
            return this.name;
        }
    }

    console.log( thor );
})();