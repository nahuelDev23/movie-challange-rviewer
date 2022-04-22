import { shallow } from 'enzyme'
import { mount } from 'enzyme/build';
import { MainNavbar } from '../../../components/navbar/MainNavbar';
import { UiContext } from '../../../context/ui/UiContext';

describe('Pruebas en <MainNavbar/>', () => {
    test('Debe mostrar <MainNavbar/> correctamente', () => {
        const wrapper = shallow(<MainNavbar />);
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe contener solo una etiqueta nav', () => {
        const wrapper = shallow(<MainNavbar />);
        expect(wrapper.find('nav').length).toBe(1);
    })

    test('Debe haber un link que al hacer click re direccione al home', () => {
        const wrapper = shallow(<MainNavbar />);
        const link = wrapper.find('Link');
        expect(link.at(0).props().to).toBe('/');
        expect(link.at(2).props().to).toBe('#');
    })

    test('Debe haber dos componentes ActiveLink', () => {
        const wrapper = shallow(<MainNavbar />);
        const link = wrapper.find('ActiveLink');
        expect(link.length).toBe(2);
    })

    test('Debe haber un link que al hacer click re direccione a la pagina movies', () => {
        const wrapper = shallow(<MainNavbar />);
        const link = wrapper.find('ActiveLink');
        expect(link.at(0).props().to).toBe('/movies');
    })

    test('Debe haber un link que al hacer click re direccione a la pagina series', () => {
        const wrapper = shallow(<MainNavbar />);
        const link = wrapper.find('ActiveLink');
        expect(link.at(1).props().to).toBe('/series');
    })

    
})