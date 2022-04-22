import { mount } from 'enzyme'
import { Filter } from '../../../components/filter/Filter';
import { DataContext } from '../../../context/data/DataContext';
import { UiContext } from '../../../context/ui/UiContext';

describe('Pruebas en <Filter/>', () => {

    test('Debe mostrar <Filter/> correctamente', () => {
        const wrapper = mount(
            <DataContext.Provider value={{
                onFilterDataByNameAndCategory: jest.fn()
            }}>
                <UiContext.Provider value={{
                    isOpenFilter: true
                }}>
                    <Filter category='movie' />
                </UiContext.Provider>
            </DataContext.Provider>

        );
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe captar el input text', () => {
        //!no verifica nada..
        const wrapper = mount(
            <DataContext.Provider value={{
                onFilterDataByNameAndCategory: jest.fn()
            }}>
                <UiContext.Provider value={{
                    isOpenFilter: true
                }}>
                    <Filter category='movie' />
                </UiContext.Provider>
            </DataContext.Provider>

        );

        const inputText = wrapper.find('input')
        inputText.simulate('change', { target: { value: 'Iron' } })


    })

  

})