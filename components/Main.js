import React, { Component } from 'react';
import { SafeAreaView, View } from 'react-native';
import GlobalStyles from '../GlobalStyles';
import { BOOKS } from '../shared/books';
import BookInfo from './BookInfo';
import BookList from './BookList';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: BOOKS,
            selectedBook: null
        };
    }

    onBookSelect(bookId) {
        this.setState({selectedBook: bookId});
    }

    render() {
        return (
            <SafeAreaView style={GlobalStyles.droidSafeArea}>
                <View style={{flex: 1}}>
                    <BookList 
                        books={this.state.books}
                        onPress={bookId => this.onBookSelect(bookId)}
                    />
                    <BookInfo
                        book={this.state.books.filter(
                            book => book.id === this.state.selectedBook)[0]}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

export default Main;