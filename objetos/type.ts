
(() => {
    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }

    let batman: Hero = {
        name: 'Bruce Wayne',
        powers: ['Super Traje']
    }

    console.log( batman );

    let thor: Hero = {
        name: 'Thor Odinson',
        age: 35, 
        powers: ['Super Fuerza', 'Rayos', 'Milholdir'],
        getName() {
            return this.name;
        }
    }

    console.log( thor );
})();