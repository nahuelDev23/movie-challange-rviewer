import { mount} from 'enzyme'
import { ProductList } from '../../../components/product/ProductList';
import { DataContext } from '../../../context/data/DataContext';
import { UiContext } from '../../../context/ui/UiContext';
import { usePaginate } from '../../../hooks/usePaginate';

jest.mock('../../../hooks/usePaginate')

describe('Pruebas en <ProductList/>', () => {
    
    test('Debe mostrar <ProductList/> correctamente', () => {
        const data = [
            {
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
            },
        ]

        usePaginate.mockReturnValue({
            currentData: data,
            currentPage: 1,
            totalPages: 1,
            paginate: jest.fn()
        });

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
                    <ProductList type='movie' />
                </UiContext.Provider>
            </DataContext.Provider>

        );
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe llamar a haber la misma cantidad de compotentes de productgCard como de resultados', () => {

        const data = [
            {
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
            },
        ]

        usePaginate.mockReturnValue({
            currentData: data,
            currentPage: 1,
            totalPages: 1,
            paginate: jest.fn()
        });

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
                    <ProductList type='movie' />
                </UiContext.Provider>
            </DataContext.Provider>

        );
        const productCard = wrapper.find('ProductCard')

        expect(productCard.length).toBe(data.length)
    })
   
})