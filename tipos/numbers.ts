
(() => {
    let avengers: number = 10;
    
    console.log(avengers);

    const villans: number = 20;

    if( avengers < villans ) { 
        console.log('Estamos en problemas');
    } else {
        console.log('Estamos salvados');
    }

    avengers = Number('54E');

    console.log({ avengers });
})();