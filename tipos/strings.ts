
(() => {
    const batman: string = 'Batman';
    const linternaVerde: string = "Linterna Verde";
    const volcanNegro: string = `Héroe: Volcan Negro`;

    console.log(`Yo soy ${batman}`);
    console.log(linternaVerde.toUpperCase());
    console.log(volcanNegro[9]?.toLowerCase() || 'No está presente');
})();