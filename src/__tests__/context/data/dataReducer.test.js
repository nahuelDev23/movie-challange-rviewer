import { dataReducer } from "../../../context/data/dataReducer";

const state = {
    series: [],
    movies: [],
}
const data = [{
    "title": "U2: Live in Paris",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "programType": "movie",
    "images": {
        "Poster Art": {
            "url": "https://streamcoimg-a.akamaihd.net/000/963/194/963194-PosterArt-9d1f4f28bb94e5e0f06e83d1216a8e30.jpg",
            "width": 559,
            "height": 828
        }
    },
    "releaseYear": 2015
},
{
    "title": "Under The Gun",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "programType": "movie",
    "images": {
        "Poster Art": {
            "url": "https://streamcoimg-a.akamaihd.net/000/115/3873/1153873-PosterArt-93b3333a696042bf7da06b874af771d8.jpg",
            "width": 1000,
            "height": 1500
        }
    },
    "releaseYear": 2016
},]

describe('Pruebas en dataReducer', () => {

    test('Debe devolver el estado por defecto', () => {
        const reducer = dataReducer(state, {});

        expect(reducer).toEqual(state);
    })

    test('Debe agregar las movies al state', () => {
        const action = {
            type: 'SET_MOVIES',
            payload: data
        }

        const reducer = dataReducer(state, action);

        expect(reducer.movies).toEqual(data);
        expect(reducer.series).toEqual([]);
    })

    test('Debe agregar las series al state', () => {
        const action = {
            type: 'SET_SERIES',
            payload: data
        }

        const reducer = dataReducer(state, action);

        expect(reducer.series).toEqual(data);
        expect(reducer.movies).toEqual([]);
    })


})