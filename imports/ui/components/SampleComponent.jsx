import React, { Component } from 'react';
//import Books from './Books';
import Books from '../containers/Books';
export default class SampleComponent extends Component{
  constructor(props){
    super(props);

    this.state = {
      count: 0,
      firstName: "Gordon",
      activeTabs: 'read'
    }
    // this.state = { activeTab: 'read' };
    this.setActiveClassOnTab = this.setActiveClassOnTab.bind(this);
    this.handleChangeTabs = this.handleChangeTabs.bind(this);
  }

  componentDidMount(){
    // initiate something
  }
  setActiveClassOnTab(tab) {
    return this.state.activeTab === tab ? 'active' : '';
  }

  handleChangeTabs(event) {
    this.setState({ activeTab: event.target.getAttribute('data-tab') });
  }

  render(){
    console.log("sample Component is being renderred...");
    return(
      // <div>
      //   You have clicked {this.state.counter} times!
      //   <h1>It is from SampleComponent</h1>
      //
      //
      //   <div className="Books">
      //     <h4>{`${this.state.firstName}'s`} Books</h4>
      //     <ul className="tabs clearfix">
      //       <li onClick={ this.handleChangeTabs } className={`tab ${this.setActiveClassOnTab('read')}`} data-tab="read">Read</li>
      //       <li onClick={ this.handleChangeTabs } className={`tab ${this.setActiveClassOnTab('unread')}`} data-tab="unread">Unread</li>
      //     </ul>
      //     <div className="tabs-data">
      //       <div id="read-books" className="tabs-data-container active">
      //         <ul className="books">
      //           <li className="book">Liminal Thinking by Dave Gray</li>
      //           <li className="book">Personal History by Katharine Graham</li>
      //           <li className="book">Born Standing Up by Steve Martin</li>
      //         </ul>
      //       </div>
      //       <div id="unread-books" className="tabs-data-container">
      //         <ul className="books">
      //           <li className="book">The Course of Love by Alain De Botton</li>
      //           <li className="book">Too Soon Old, Too Late Smart by Gordon Livingston</li>
      //           <li className="book">Servant Leadership by Robert K. Greenleaf</li>
      //         </ul>
      //       </div>
      //     </div>
      //   </div>
      //
      //
      //
      //
      //
      // </div>
      <Books
    firstName="Forhad"
    readBooks={[
    {title: 'Liminal Thinking', author: 'Dave Gray'},
    {title: 'Personal History', author: 'Katharine Graham'},
    {title: 'Born Standing Up', author: 'Steve Martin'},
  ]}
    unreadBooks={[
    {title: 'The Course of Love', author: 'Alain De Botton'},
    {title: 'Too Soon Old, Too Late Smart', author: 'Gordon Livingston'},
    {title: 'Servant Leadership', author: 'Robert K. Greenleaf'},
  ]}
  />

    )
  }
}
