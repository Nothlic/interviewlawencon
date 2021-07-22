import React, { useRef } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import theme from '../../utils/theme';
import { Container, TextInput, View } from './style';
import { Icon } from 'react-native-elements'


import { useMoviesSeries } from '../../hooks/MoviesSeries';

interface InputValueReference {
    value: string;
}

const Input: React.FC = () => {
    const { search } = useMoviesSeries();
    const inputValueRef = useRef<InputValueReference>({ value: '' });

    return (
        <Container>
            <TextInput
                placeholder="Search movies, games and series"
                placeholderTextColor={theme.placeholder}
                onChangeText={(value) => {
                    inputValueRef.current.value = value;
                }}
                onSubmitEditing={() => search(inputValueRef.current.value)}
            />
            <TouchableWithoutFeedback
                testID="searchIcon"
                onPress={() => search(inputValueRef.current.value)}
            >
                <View>
                    <Icon
                        name='search'
                        type='FontAwesome'
                        color='#517fa4'
                    />
                </View>
            </TouchableWithoutFeedback>
        </Container>
    );
};

export default Input;