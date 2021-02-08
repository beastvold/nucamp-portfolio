import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

function BookList(props) {

    const renderBook = ({item}) => {
        console.log(`Rendering one book: ${item.title}`);
        return (
            <View> 
                <Text>Rendering {item.title}...</Text>
                <ListItem bottomDivider>
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

    console.log('Now render the FlatList.');
    console.log('Using: ' + props.books[0].title);
    return (
        <FlatList
            data={props.books}
            renderItem={renderBook}
            keyExtractor={book => book.id.toString()}
        />
    );
}

export default BookList;