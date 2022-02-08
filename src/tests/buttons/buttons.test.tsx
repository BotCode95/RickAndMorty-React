import React from 'react'
import {shallow} from 'enzyme'
import {Button} from '../../components/Buttons/Button'

describe(('Test in <Buttons/>'), ()=> {

    const className: string = "btn btn-danger col-2 ms-2 mb-5";
    const children : string = "Next Page";
    
    test('showed render button next', () => {
        const wrapper = shallow( 
            <Button 
                className={className}
            >{children}
            </Button> );

        expect(wrapper).toMatchSnapshot();
    });


    test('increment page', () => {
        let page = 1;
        const onClick = () => {page++};
         const wrapper = shallow( 
            <Button 
                className={className}
                onClick={onClick}
            >{children}
            </Button> );

        wrapper.find('button').at(0).simulate('click');
        
    });
})