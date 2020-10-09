import React, { useState } from 'react';

import { View } from 'react-native';

import {cardData} from '../../data/content';


import {
	Container,
	HeaderArea,
	Logo,
	Title,
	Text,
	Icon,
	Content
} from './styles';

const createCardContent = (component, index) => {
	return <View key={index} style={{ width: 85, backgroundColor: 'rgba(0, 0, 0, 0.1)', marginBottom: 20, borderRadius: 5, marginRight: 5, padding: 5 }}>
		{cardContent(component)}
	</View>
}


const cardContent = (item, id) => {
	return <View style={{ flex: 1 }} key={id}>
		<View style={{ flex: 1 }}>
			<Icon name={item.iconName} size={18} color={'white'} />
		</View>
		<View>
			<Text>{item.text}</Text>
		</View>
	</View>
}


const Footer = () => {

	return <Container>
		<Content horizontal contentContainerStyle={{
			flexGrow: 1,
		}}>
			{cardData.map((item, index) => createCardContent(item, index))}
		</Content>
	</Container>
}


export default Footer;