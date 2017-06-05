import React, { Component } from 'react';

import SampleLayout from '../layouts/SampleLayout.jsx';
import SampleComponent from './SampleComponent.jsx';
import ShowBooks from './ShowBooks';

export default class SamplePage extends Component{

    render(){
        console.log("SamplePage being rendered");

        return(
            <SampleLayout
                content={<ShowBooks/>}
            />
        );
    }
}
