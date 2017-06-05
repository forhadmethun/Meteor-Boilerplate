import React from 'react';
import BooksList from './BooksList';
import ShowBooks from './ShowBooks';
import AddBook from './AddBook';
import { Books as BooksCollection } from '../../api/books/books.js';


import SampleComponent from './SampleComponent.jsx';


//import BooksList from './BooksList';
//import AddBook from './AddBook';




export default class ShowTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: true };
        this.setActiveClassOnTab = this.setActiveClassOnTab.bind(this);
        this.handleChangeTabs = this.handleChangeTabs.bind(this);
        this.handleReadUnread = this.handleReadUnread.bind(this);
    }

    setActiveClassOnTab(tab) {
        return 'read' === tab ? 'active' : '';
    }

    handleChangeTabs(event) {
        console.log('-->>!! ' +document.querySelector('[name="checkme"]').checked + '!!<<--' + this.state.activeTab);
        this.setState({ activeTab: !this.state.activeTab});
    }

    handleReadUnread (event) {
        event.preventDefault();

        const book = {
            // title: document.querySelector('[name="bookTitle"]').value,
            // author: document.querySelector('[name="bookAuthor"]').value,
            read: document.querySelector('[name="checkme"]').checked,
        };
        console.log('-->>!! ' +document.querySelector('[name="checkme"]').checked + '!!<<--');

        // Meteor.call('addBook', book, (error, bookId) => {
        //     if (error) {
        //         console.warn(error.reason);
        //     } else {
        //         document.querySelector('.AddBook').reset();
        //         console.log('Book added with ID:', bookId);
        //     }
        // });
    };






    render() {
        console.log('Books are shown on table...');
        return (

        //     <div className="Books">
        //     <ul className="tabs clearfix">
        //         <li onClick={ this.handleChangeTabs } className={`tab ${this.setActiveClassOnTab('read')}`} data-tab="read">Read</li>
        //         <li onClick={ this.handleChangeTabs } className={`tab ${this.setActiveClassOnTab('unread')}`} data-tab="unread">Unread</li>
        //     </ul>
        //     <div className="tabs-data">
        //         <BooksList
        //             type="read"
        //             books={ BooksCollection.find({ read: true }).fetch() }
        //             isActive={ this.setActiveClassOnTab('read') }
        //         />
        //         <BooksList
        //             type="unread"
        //             books={ BooksCollection.find({ read: false }).fetch() }
        //             isActive={ this.setActiveClassOnTab('unread') }
        //         />
        //     </div>
        // </div>
            <div>
                {/*onSubmit={ handleAddBook }*/}
                <form className="AddBook clearfix" onSubmit={ this.handleReadUnread } >
                    <label><input type="checkbox" name="checkme" onClick={ this.handleChangeTabs }  /> Show Read???</label>
                </form>
            <table className="ui celled table">
                <thead>
                <tr>
                    <th>Home</th>
                    <th>Read</th>
                    <th>Unread</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>

                        <SampleComponent/>
                    </td>
                    <td>

                        { !this.state.activeTab ?

                            <BooksList
                                type="read"
                                books={ BooksCollection.find({ read: true }).fetch() }
                                isActive={ this.setActiveClassOnTab('read') }
                            />


                            : ' ' }



                    </td>
                    <td>

                        { this.state.activeTab ?

                            <BooksList
                                type="unread"
                                books={ BooksCollection.find({ read: false }).fetch() }
                                isActive={ this.setActiveClassOnTab('read') }
                            />
                            : ' ' }



                    </td>
                </tr>

                </tbody>
            </table>
                </div>

        );
    }
}