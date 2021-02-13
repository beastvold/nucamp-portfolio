import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import GlobalStyles from '../GlobalStyles';

function BookList(props) {

    const renderBook = ({item}) => {
        return (
            <View>
                <Text style={GlobalStyles.bookInfoText}>Select a book for more info.</Text>
                <ListItem 
                    bottomDivider
                    onPress={() => props.onPress(item.id)}
                >
                    <Avatar 
                        source={require('../assets/great-expectations.jpg')} 
                        size={"large"}
                    />
                    <ListItem.Content>
                        <ListItem.Title>{item.title}</ListItem.Title>
                        <ListItem.Subtitle>{`${item.author}, ${item.published}`}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            </View>
        );
    };

    return (
        <FlatList
            data={props.books}
            renderItem={renderBook}
            keyExtractor={book => book.id.toString()}
        />
    );
}

export default BookList;