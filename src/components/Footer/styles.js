import styled from 'styled-components/native';


import Ico from 'react-native-vector-icons/FontAwesome5';


export const Container = styled.View`
	height: 100px;
`;

export const Content = styled.ScrollView`

`;

export const HeaderArea = styled.View`
	flex-direction: row;
	align-items: center;	
`;
export const Logo = styled.Image`
	width: 64px;
	height: 64px;
`;

export const Title = styled.Text`
	font-size: 22px;
	font-weight: bold;
	color: white;

	margin-left: 10px;
`;

export const Text = styled.Text`
	color: white;
	
`;

export const Icon = styled(Ico)`
	
`;


export const CardContent = styled.View`

`;