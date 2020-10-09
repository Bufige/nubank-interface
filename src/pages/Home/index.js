import React from 'react';


import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {
	Container, 
	Content,
	Text,
	Icon
} from './styles';
import { View, TouchableOpacity} from 'react-native';


const createCardContent = (component, id) => {
	return <View key={id} style={{ minHeight: 125, backgroundColor: 'white', marginBottom: 20, borderRadius: 5, padding: 15}}>
		{createContent(component)}
	</View>
}

const createContent = ({header, content, footer}) => {
	return <View style={{flex: 1}}>
		<View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
			{header}
		</View>

		<View style={{flex: 1}}>
			{content}
		</View>
		<View style={{flex: 1}}>
			{footer}
		</View>
	</View>
}

const contentData = [
	{
		header: <>
			<Icon name={'dollar-sign'} size={18} color={'grey'}/>
			<Text style={{marginLeft: 10}}>Pix</Text>
		</>,
		content: <>
			<Text style={{fontSize: 12, fontSize: 16, color: 'black', fontWeight: 'bold', marginVertical: 10}}>Um novo jeito de fazer transferências e pagamentos</Text>
			<Text style={{fontSize: 14}}>Em breve, você poderá pagar e recebe em qualquer horário sem custo e para qualquer banco. Deixe tudo pronto!</Text>
		</>,
		footer: <View style={{marginVertical: 20}}>
			<TouchableOpacity style={{borderRadius: 5, borderWidth: 1, borderColor: '#9114b5', width: 175, height: 30, alignItems: 'center', padding: 5}}>
				<Text style={{color:'#9114b5', fontWeight: 'bold', fontSize: 12}}>Registre suas chaves</Text>
			</TouchableOpacity>
		</View>
	},
	{
		header: <>
			<Icon name={'dollar-sign'} size={18} color={'grey'}/>
			<Text style={{marginLeft: 10}}>Conta</Text>
		</>,
		content: <>
			<Text style={{fontSize: 12}}>Saldo disponível</Text>
		</>,
		footer: <>
			<Text style={{fontWeight: 'bold', color: 'black'}}>R$ 666</Text>
		</>
	},
	{
		header: <>
			<Icon name={'dollar-sign'} size={18} color={'grey'}/>
			<Text style={{marginLeft: 10}}>Cartão de crédito</Text>
		</>,
		content: <>
			<Text style={{fontSize: 12}}>Fatural atual</Text>
		</>,
		footer: <>
			<Text style={{fontWeight: 'bold', color: '#17d5eb'}}>R$ 0</Text>
			<Text style={{fontSize: 12}}>Limite disponível  <Text style={{fontSize: 12, color: 'green'}}>R$ 10000000</Text></Text>
		</>
	},
	{
		header: <>
			<Icon name={'gift'} size={18} color={'#9114b5'}/>
			<Text style={{marginLeft: 10, color: '#9114b5'}}>Rewards</Text>
		</>,
		content: <View style={{marginVertical: 30}}>
			<Text style={{fontSize: 18, color: 'black'}}>Apague compras com pontos que nunca expiram</Text>
		</View>,
		footer: <>
			<TouchableOpacity style={{borderRadius: 5, borderWidth: 1, borderColor: '#9114b5', width: 150, alignItems: 'center', padding: 5}}>
				<Text style={{color:'#9114b5', fontWeight: 'bold'}}>CONHECER</Text>
			</TouchableOpacity>
		</>
	}
];



const Home = () => {

	const test = <View>
		<Text>teste</Text>
	</View>

	return <Container contentContainerStyle={{
		flex: 1,
		flexGrow: 1
	}}>
		<Header/>
		<Content>
			{contentData.map( (item, index) => createCardContent(item, index))}
		</Content>
		<Footer/>
	</Container>
}


export default Home;