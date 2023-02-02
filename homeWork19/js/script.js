

/* Написать функцию, которая принимает массив и возвращает объект. Использовать перебирающие методы.
Все должно быть гибким без хардкордного кода.
*/

const cities = ['Minsk', 'Vitebsk', 'Minsk', 'Brest', 'Minsk', 'Minsk', 'Brest', 'Vitebsk', 'Brest'];

function func(arr) {

    return arr.reduce((sum, current) => {

        if(sum[current]) {
            sum[current] = sum[current] + 1;
        } else {
            sum[current] = 1;
        }

        return sum;
    }, {});
}

func(cities);


const pets = [
    { type: 'Tirex', name: 'Maks' },
    { type: 'Dog', name: 'Spot' },
    { type: 'Cat', name: 'Tiger' },
    { type: 'Dog', name: 'Rover' },
    { type: 'Cat', name: 'Leo' },
    { type: 'Dog', name: 'Fil' },
    { type: 'Cat', name: 'Alex' },
    { type: 'Tirex', name: 'Hulio' },
];

function funcTwo(arr, groupByFilter) {
    return arr.reduce((sum, current) => {

        const property = current[groupByFilter];

        if (sum[property]) {
            sum[property].push(current);
        } else {
            sum[property] = [current];
        }
        return sum;
    }, {});
}

console.log(funcTwo(pets, 'type'));

