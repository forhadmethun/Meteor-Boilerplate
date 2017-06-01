import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import SamplePage from '/imports/ui/pages/samplePage.jsx'

FlowRouter.route('/', {
  name: 'SamplePage',
  action(params, queryParams) {
      console.log("home route is being called...");
      // Meteor.userId() ? mount(Dashboard) : mount(Login);
      mount(SamplePage);
  }
});


FlowRouter.route( '/first', {
    name: 'first',
    action() {
        // We'll render our components here.
        console.log("first route is being called...");
    }
});


FlowRouter.route( '/second', {
    name: 'second',
    action() {
        // We'll render our components here.
        console.log("second route is being called...");
    }
});


FlowRouter.route( '/third', {
    name: 'third',
    action() {
        // We'll render our components here.
        console.log("third route is being called...");
    }
});


