import { shallow } from 'enzyme'
import { Series } from '../../pages/Series';

describe('Pruebas en <Series/>', () => {
    test('Debe mostrar <Series/> correctamente', () => {
        const wrapper = shallow(<Series />);
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe hacer uso del MainLayout', () => {
        const wrapper = shallow(<Series />);

        const MainLayout = wrapper.find('MainLayout');
        expect(MainLayout).toBeTruthy();
    })
    test('Debe Contener el componente Filter con la propiedad series', () => {
        const wrapper = shallow(<Series />);
        const Filter = wrapper.find('Filter');
        expect(Filter.props().category).toBe('series');
    })


    test('Debe Contener el titulo Popular Series', () => {
        const wrapper = shallow(<Series />);

        const title = wrapper.find('h1').text();
        expect(title).toBe('Popular Series');
    })

    test('Debe hacer uso del componente ProductList y pasar el atributo series', () => {
        const wrapper = shallow(<Series />);

        const ProductList = wrapper.find('ProductList');
        expect(ProductList.props().type).toBe('series');
        expect(ProductList).toBeTruthy();
    })
})