import { shallow } from 'enzyme'
import { HomeNavbar } from '../../../components/navbar/HomeNavbar';

describe('Pruebas en <HomeNavbar/>', () => {
    test('Debe mostrar <HomeNavbar/> correctamente', () => {
        const wrapper = shallow(<HomeNavbar />);
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe contener solo una etiqueta nav',()=>{
        const wrapper = shallow(<HomeNavbar />);
        expect(wrapper.find('nav').length).toBe(1);
    })

    test('Debe haber un link que al hacer click re direccione al home y otros 2 que no vayan a ningun lado',()=>{
        const wrapper = shallow(<HomeNavbar />);
        const link = wrapper.find('Link');
        
        expect(link.at(0).containsMatchingElement( <img  alt="Logo Dreadful Tomato" />)).toBe(true);
        expect(link.at(0).props().to).toBe('/');
        expect(link.at(1).props().to).toBe('#');
        expect(link.at(2).props().to).toBe('#');
    })
})