import React from 'react'
import {shallow} from 'enzyme'
import { Character } from '../../components/Listado/Character';

describe(('Test in <Character/>'), ()=> {
    const item = {
        "id": 1,
        "name": "Rick Sanchez",
    };
    const wrapper = shallow( <Character id={item.id} name={item.name}/> );
    
    test('should render component', () => {  

        expect(wrapper).toMatchSnapshot();
    });
})