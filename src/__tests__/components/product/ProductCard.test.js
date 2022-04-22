import { mount } from 'enzyme'
import { ProductCard } from '../../../components/product/ProductCard';
import { DataContext } from '../../../context/data/DataContext';
import { UiContext } from '../../../context/ui/UiContext';


const data = {
    "title": "No Activity",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "programType": "series",
    "images": {
        "Poster Art": {
            "url": "https://streamcoimg-a.akamaihd.net/000/106/36/10636-PosterArt-9add943c5e62c2d89f6d31458d33508a.jpg",
            "width": 1000,
            "height": 1500
        }
    },
    "releaseYear": 2015
}
describe('Pruebas en <ProductCard/>', () => {

    test('Debe mostrar <ProductCard/> correctamente', () => {

        const wrapper = mount(
            <DataContext.Provider value={{
                onFilterDataByNameAndCategory: jest.fn(),
                onLoadData: jest.fn(),
                movies: [{}],
                series: [{}],
            }}>
                <UiContext.Provider value={{
                    isOpenFilter: true
                }}>
                    <ProductCard product={data} />
                </UiContext.Provider>
            </DataContext.Provider>

        );
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe verse en pantalla  los mismos datos que hay en el objeto', () => {

        const wrapper = mount(
            <DataContext.Provider value={{
                onFilterDataByNameAndCategory: jest.fn(),
                onLoadData: jest.fn(),
                movies: [{}],
                series: [{}],
            }}>
                <UiContext.Provider value={{
                    isOpenFilter: true
                }}>
                    <ProductCard product={data} />
                </UiContext.Provider>
            </DataContext.Provider>

        );

        expect(wrapper.find('h1').text()).toBe(data.title)
        expect(wrapper.find('h2').text()).toBe(data.releaseYear.toString())
        expect(wrapper.find('p').text()).toBe(data.description.slice(0, 100))
        expect(wrapper.find('img').props().src).toBe(data.images['Poster Art'].url)


    })



})