

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
    { type: 'Dog', name: 'Spot' },
    { type: 'Cat', name: 'Tiger' },
    { type: 'Dog', name: 'Rover' },
    { type: 'Dog', name: 'Fil' },
    { type: 'Cat', name: 'Leo' },
    { type: 'Tirex', name: 'Hulio' },
    { type: 'Tirex', name: 'Maks' },
];

function funcTwo(arr) {
    return arr.reduce((sum, current) => {
        const array = [];
        let arrayTwo = [];
        if (sum[current.type]) {
            arrayTwo.push(current);
        } else {
            sum[current.type] = array;
            array.push(current);
        }
        if (typeof arrayTwo[0] !== 'undefined') {

            for (let k in sum) {
                if (k === arrayTwo[0].type){
                    sum[k].push(arrayTwo[0]);
                }
            }
        }

        return sum;
    }, {});
}

console.log(funcTwo(pets));