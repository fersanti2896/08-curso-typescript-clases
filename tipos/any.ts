
(() => {
    let avenger: any = 123;
    let exists;
    let power; 

    avenger = 'Dr. Strange';
    console.log( (avenger as string).charAt(1) );

    avenger = 253.2124;
    console.log( avenger.toFixed(2) );
    console.log( <number>avenger.toFixed(2) );

    console.log( exists );
    console.log( power );
})();