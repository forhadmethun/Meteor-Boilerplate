import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import SamplePage from '/imports/ui/pages/samplePage.jsx'



//import AddBooks from '/imports/ui/components/AddBook.js'
import AddBooksMain from '/imports/ui/components/AddBookMain.js'

//import ShowBooks from '/imports/ui/components/ShowBooks.js'
//import ShowBooks from '/imports/ui/components/ShowBooks';
import ShowBooks from '/imports/ui/containers/ShowBooks'
import ShowTable from '/imports/ui/containers/ShowTable'


FlowRouter.route('/', {
  name: 'SamplePage',
  action(params, queryParams) {
      console.log("home route is being called...");
      // Meteor.userId() ? mount(Dashboard) : mount(Login);
      mount(SamplePage);
  }
});


FlowRouter.route( '/home', {
    name: 'home',
    action() {
        // We'll render our components here.

        console.log("first route is being called...");
        mount(SamplePage);
    }
});




FlowRouter.route( '/insert', {
    name: 'insert',
    action() {
        // We'll render our components here.
        console.log("second route is being called...");
        mount(AddBooksMain);
    }
});


FlowRouter.route( '/show', {
    name: 'third',
    action() {
        // We'll render our components here.
        console.log("third route is being called...");
        mount(ShowBooks);
    }
});


FlowRouter.route( '/table', {
    name: 'table',
    action() {
        // We'll render our components here.
        console.log("third route is being called...");
        mount(ShowTable);
    }
});


