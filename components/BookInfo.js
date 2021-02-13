import React from 'react';
import { View, Linking, FlatList } from 'react-native';
import { Text, Card, Rating, Button } from 'react-native-elements';
import GlobalStyles from '../GlobalStyles';

function BookInfo(props) {

    function renderBook({item}) {
        return (
            <Card>
                <Card.Title h3>{item.title}</Card.Title>
                <Card.Divider />
                <Card.Image 
                    source={require('../assets/great-expectations.jpg')} 
                    style={{
                        resizeMode: "contain",
                        height: 200
                    }}
                />
                <Text style={GlobalStyles.bookInfoText}>Author: {item.author}</Text>
                <Text style={GlobalStyles.bookInfoText}>Published: {item.published}</Text>
                <Text style={GlobalStyles.bookInfoText}>{item.description}</Text>
                <Rating
                    readonly
                    startingValue={item.rating}
                    fractions={2}
                    imageSize={24}
                    style={{ margin: 5 }}
                />
                <View style={{ paddingTop: 10 }}>
                    <Button 
                        title="Open on Goodreads" 
                        onPress={ () => { Linking.openURL(item.goodreads)}}
                    />
                </View>
            </Card>
        );
    }

    if (props.book) {
        return (
            <FlatList
                data={[props.book]}
                renderItem={renderBook}
                keyExtractor={book => book.id.toString()}
            />
        );
    } else {
        return <View />
    }

}

export default BookInfo;