import styled from 'styled-components/native';


import Ico from 'react-native-vector-icons/FontAwesome5';


export const Container = styled.View`
	align-items: center;
	margin: 20px 0;
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

`;

export const Icon = styled(Ico)`
	
`;