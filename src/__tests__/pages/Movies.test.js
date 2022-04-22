import { shallow } from 'enzyme'
import { Movies } from '../../pages/Movies';

describe('Pruebas en <Movies/>', () => {
    test('Debe mostrar <Movies/> correctamente', () => {
        const wrapper = shallow(<Movies />);
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe hacer uso del MainLayout', () => {
        const wrapper = shallow(<Movies />);

        const MainLayout = wrapper.find('MainLayout');
        expect(MainLayout).toBeTruthy();
    })

    test('Debe Contener el componente Filter con la propiedad movie', () => {
        const wrapper = shallow(<Movies />);
        const Filter = wrapper.find('Filter');
        expect(Filter.props().category).toBe('movie');
    })

    test('Debe Contener el titulo Popular Movies', () => {
        const wrapper = shallow(<Movies />);

        const title = wrapper.find('h1').text();
        expect(title).toBe('Popular Movies');
    })

    test('Debe hacer uso del componente ProductList y pasar el atributo movie', () => {
        const wrapper = shallow(<Movies />);

        const ProductList = wrapper.find('ProductList');
        expect(ProductList.props().type).toBe('movie');
        expect(ProductList).toBeTruthy();
    })
})