import React, {useState} from 'react';

import logo from '../../../assets/nubank_logo_offwhite.png';


import {
	Container, 
	HeaderArea,
	Logo,
	Title,
	Text, Icon
} from './styles';


const Header = () => {

	const [isOpen, setIsopen] = useState(false);
	const onContent = () => {
		setIsopen(x => !x);
	}

	return <Container>
		<HeaderArea>
			<Logo source={logo}/>
			<Title>Leonardo</Title>
		</HeaderArea>
		<Icon name={!isOpen ? 'angle-down' : 'angle-up'} size={24} color={'white'} onPress={onContent}/>
	</Container>
}


export default Header;