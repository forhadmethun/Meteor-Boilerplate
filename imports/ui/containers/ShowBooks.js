import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Books from '../components/Books';
import ShowBook from '../components/ShowBookMain';
import { Books as BooksCollection } from '../../api/books/books.js';

// export default createContainer((props) => {
//     const subscription = Meteor.subscribe('books');
//
//     return {
//         firstName: 'Forhad',
//         readBooks: BooksCollection.find({ read: true }).fetch(),
//         unreadBooks: BooksCollection.find({ read: false }).fetch(),
//     };
// }, Books);

export default createContainer((props) => {
    const subscription = Meteor.subscribe('books');

    return {
        firstName: 'Forhad',
        readBooks: BooksCollection.find({ read: true }).fetch(),
        unreadBooks: BooksCollection.find({ read: false }).fetch(),
    };
}, ShowBook);