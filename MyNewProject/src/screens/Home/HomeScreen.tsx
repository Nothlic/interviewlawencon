import React from 'react';
import { Image } from 'react-native';
import { Container, Title, Header, WrapperImage, Text } from './styles';

import Input from '../../components/Input';
import GridMoviesSeries from '../../components/GridMoviesSeries';

import { useMoviesSeries } from '../../hooks/MoviesSeries';

const HomeScreen: React.FC = () => {
  const { data, notFound } = useMoviesSeries();

  return (
    <Container testID="home">
      <Header>
        <Title>Movie Apps</Title>
        <Input />
      </Header>
      {data.length === 0 ? (
        <>
          <WrapperImage>
            {notFound && (
              <Text testID="textNotFound">
                Sorry Not Found.{' '}
              </Text>
            )}
          </WrapperImage>
        </>
      ) : (
        <GridMoviesSeries data={data} />
      )}
    </Container>
  );
};

export default HomeScreen;