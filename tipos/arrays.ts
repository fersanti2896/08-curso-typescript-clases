
(() => {
    const numbers: (string | number | boolean)[] = [16, 17, '18', 19, 20];
    numbers.push(true);

    console.log( numbers );

    const fruits: string[] = ['Manzana', 'Sandía', 'Pera'];
    fruits.push('Mandarina');

    console.log( fruits );

    const villian = ['Dormammu', 'Thanos', 'Kang el Conquistador'];
    villian.forEach( v => console.log( v.toUpperCase() ) ); 
})();