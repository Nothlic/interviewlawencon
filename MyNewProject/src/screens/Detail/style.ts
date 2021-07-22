import styled from 'styled-components/native';
import theme from '../../utils/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.background};
  padding: 20px;
`;

export const WrapperPoster = styled.View`
  align-items: center;
  margin: 20px;
`;

export const Title = styled.Text`
  color: #333333;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const Year = styled.Text`
  color: #333333;
`;

export const Text = styled.Text`
  color: #333333;
  line-height: 24px;
  margin: 10px 0;
`;