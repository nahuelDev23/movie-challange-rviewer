import { Home } from '../../pages/Home'
import { shallow } from 'enzyme'

describe('Pruebas en <Home/>', () => {

    test('Debe mostrar <Home/> correctamente', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe hacer uso del HomeLayout', () => {
        const wrapper = shallow(<Home />);
        const HomeLayoutComponent = wrapper.find('HomeLayout');
        expect(HomeLayoutComponent).toBeTruthy();
    })
    test('Debe contener el componente Categories', () => {
        const wrapper = shallow(<Home />);
        const categoryComponent = wrapper.find('Categories');
        expect(categoryComponent).toBeTruthy();
    })

})