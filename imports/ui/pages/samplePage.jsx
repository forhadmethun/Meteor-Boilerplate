import React, { Component } from 'react';

import SampleLayout from '/imports/ui/layouts/SampleLayout.jsx';
import SampleComponent from '/imports/ui/components/SampleComponent.jsx';

export default class SamplePage extends Component{

  render(){
    console.log("SamplePage being rendered");

      return(
        <SampleLayout

            firstName="Gordon"
            readBooks={[
              { title: 'Liminal Thinking', author: 'Dave Gray' },
              { title: 'Personal History', author: 'Katharine Graham' },
              { title: 'Born Standing Up', author: 'Steve Martin' },
            ]}
            content={<SampleComponent/>}


        />
      );
  }
}
