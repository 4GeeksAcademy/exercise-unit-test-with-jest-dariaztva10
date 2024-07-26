const {sum, fromYenToPound} = require('./app.js');

test('suma 14 + 9 igual a 23', () => {
    let total = sum(14,9);

expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("Convertir 10 dolares a yenes", function() {
    const { fromDollarToYen } = require('./app.js');
    const yens = fromDollarToYen(10);
    //Si 1 euro = 1,07 dolar, entonces 10 dollares deben ser 10 / 1,07 euros
    //Si 1 euro = 156,5 yen, entonces los yens serán (10/1,07)*156,5
    const expected = (10/1.07)*156.5;
    expect(fromDollarToYen(10)).toBe(expected);
    })

test("Los yenes convertidos a pounds son los esperados", function(){
    const {fromYenTopound} = require('./app.js');
    const pounds = fromYenToPound(15);
    //Si 1 euros = 156.5 yens, entonces 15 yens sera: 15/156.5 
    //Si 1 euro = 0,87 pound, etnonces los pounds esperados seran (15/156.5)*0,87
    const expected = (15/156.5)*0.87;
    expect(fromYenToPound(15)).toBe(expected);
})
