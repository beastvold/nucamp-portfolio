import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import GlobalStyles from '../GlobalStyles';
import BookList from './BookList';
import { BOOKS } from '../shared/books';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: BOOKS
        };
    }

    render() {
        return (
            <SafeAreaView style={GlobalStyles.droidSafeArea}>
                <BookList books={this.state.books} />
            </SafeAreaView>
        );
    }
}

export default Main;