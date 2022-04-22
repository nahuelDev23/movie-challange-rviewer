import { shallow } from 'enzyme'
import { Filter } from '../../../components/filter/Filter';

describe('Pruebas en <Filter/>', () => {
    test('Debe mostrar <Filter/> correctamente', () => {
        const wrapper = shallow(<Filter category='movie' />);
        expect(wrapper).toMatchSnapshot();
    })

    //TODO:ESTO
    test('Debe captar el input text', () => {
        const wrapper = shallow(<Filter category='movie' />);
        const inputText = wrapper.find('input')
        // inputText.simulate('change', { target: { value: 'Iron'} })
        console.log(inputText)
    })

})