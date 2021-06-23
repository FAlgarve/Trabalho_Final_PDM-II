/*import { StatusBar } from 'expo-status-bar';*/
/*import React from 'react';*/
// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
/*import { greaterOrEq } from 'react-native-reanimated';*/

/*function SplashScreen({ navigation }) {
	return (
			
				<View style={{flex: 1, backgroundColor: '#333',	alignItems: 'center', justifyContent: 'center',}}>
					<TouchableOpacity onPress={() => navigation.navigate('Login')}>
						<View style={{marginBottom: '20%'}}>
							<Image style={{width: 200, height: 200,}} source={require('./assets/open-book.png')}/>
							<Text style={{ fontSize: 36, color: 'white',}}>MANGAS PT</Text>
						</View>
					</TouchableOpacity>
				</View>
			
		);
	}*/

function LoginScreen({ navigation }) {
	return (
		<View style={{flex: 1, backgroundColor: '#333',	alignItems: 'center', justifyContent: 'center',}}>
			

		<View style={{marginBottom: '20%'}}>
		<Image style={{width: 200, height: 200,}} source={require('./assets/open-book.png')}/>

		<Text style={{ fontSize: 36, color: 'white',}}>MANGAS PT</Text>
		</View>

			<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', borderWidth: 0.5, borderColor: '#00ccff', height: 40, borderRadius: 5, margin: 10,}}>
					<Image source={require('./assets/user.png')} style={{ padding: 10, margin: 5, height: 25, width: 25, resizeMode: 'stretch', alignItems: 'center',}}/>
					<TextInput style={{flex: 1, color:'white'}}
						placeholder="Username"
						placeholderTextColor='white'
						underlineColorAndroid="transparent"/>
			</View>

			<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', borderWidth: 0.5, borderColor: '#00ccff', height: 40, borderRadius: 5, margin: 10,}}>
				<Image source={require('./assets/lock.png')} style={{ padding: 10, margin: 5, height: 25, width: 25, resizeMode: 'stretch', alignItems: 'center',}}/>
					<TextInput
						style={{flex: 1, color:'white'}}
						placeholder="Password"
						placeholderTextColor='white'
						underlineColorAndroid="transparent"
					/>
			</View>

			<View style={{flexDirection: 'column', alignItems: 'center'}}>
				<TouchableOpacity style={{marginTop: 10}}><Text style={{color: '#00a3cc'}} onPress={() => navigation.navigate('Signin')}>Registe-se</Text></TouchableOpacity>
				<TouchableOpacity style={{marginTop: 10}}><Text style={{color: '#00a3cc'}} onPress={() => navigation.navigate('ForgotPass')}>Não sabe a palavra pass?</Text></TouchableOpacity>
			</View>

			<TouchableOpacity style={{ backgroundColor: '#00a3cc', marginTop: '30%', paddingTop: 20, paddingBottom: 20, paddingLeft: 40, paddingRight: 40, borderRadius: 12,}}
			onPress={() => navigation.navigate('Main')}>
				<Text style={{fontSize: 36, color: 'white'}}>Login</Text>
			</TouchableOpacity>
	</View>
	);
  }

  function SigninScreen({ navigation }) {
	return (
		<View style={{flex: 1, backgroundColor: '#333',	alignItems: 'center', justifyContent: 'center',}}>
			

		<View style={{marginBottom: '20%'}}>
		<Image style={{width: 200, height: 200,}} source={require('./assets/open-book.png')}/>

		<Text style={{ fontSize: 36, color: 'white',}}>MANGAS PT</Text>
		</View>

			<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', borderWidth: 0.5, borderColor: '#00ccff', height: 40, borderRadius: 5, margin: 10,}}>
					<Image source={require('./assets/user.png')} style={{ padding: 10, margin: 5, height: 25, width: 25, resizeMode: 'stretch', alignItems: 'center',}}/>
					<TextInput style={{flex: 1, color:'white'}}
						placeholder="Username"
						placeholderTextColor='white'
						underlineColorAndroid="transparent"/>
			</View>

			<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', borderWidth: 0.5, borderColor: '#00ccff', height: 40, borderRadius: 5, margin: 10,}}>
				<Image source={require('./assets/at.png')} style={{ padding: 10, margin: 5, height: 25, width: 25, resizeMode: 'stretch', alignItems: 'center',}}/>
					<TextInput
						style={{flex: 1, color:'white'}}
						placeholder="Email"
						placeholderTextColor='white'
						underlineColorAndroid="transparent"
					/>
			</View>

			<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', borderWidth: 0.5, borderColor: '#00ccff', height: 40, borderRadius: 5, margin: 10,}}>
				<Image source={require('./assets/lock.png')} style={{ padding: 10, margin: 5, height: 25, width: 25, resizeMode: 'stretch', alignItems: 'center',}}/>
					<TextInput
						style={{flex: 1, color:'white'}}
						placeholder="Password"
						placeholderTextColor='white'
						underlineColorAndroid="transparent"
					/>
			</View>

			<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', borderWidth: 0.5, borderColor: '#00ccff', height: 40, borderRadius: 5, margin: 10,}}>
				<Image source={require('./assets/lock.png')} style={{ padding: 10, margin: 5, height: 25, width: 25, resizeMode: 'stretch', alignItems: 'center',}}/>
					<TextInput
						style={{flex: 1, color:'white'}}
						placeholder="Confirm Password"
						placeholderTextColor='white'
						underlineColorAndroid="transparent"
					/>
			</View>

			<TouchableOpacity style={{ backgroundColor: '#00a3cc', marginTop: '30%', paddingTop: 20, paddingBottom: 20, paddingLeft: 40, paddingRight: 40, borderRadius: 12,}}
			onPress={() => navigation.navigate('Main')}>
				<Text style={{fontSize: 36, color: 'white'}}>Registar</Text>
			</TouchableOpacity>
	</View>
	);
  }

  function ForgotPass({ navigation }) {
	return (
		<View style={{flex: 1, backgroundColor: '#333',	alignItems: 'center', justifyContent: 'center',}}>
			

		<View style={{marginBottom: '20%'}}>
		<Image style={{width: 200, height: 200,}} source={require('./assets/open-book.png')}/>

		<Text style={{ fontSize: 36, color: 'white',}}>MANGAS PT</Text>
		</View>

			<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', borderWidth: 0.5, borderColor: '#00ccff', height: 40, borderRadius: 5, margin: 10,}}>
				<Image source={require('./assets/lock.png')} style={{ padding: 10, margin: 5, height: 25, width: 25, resizeMode: 'stretch', alignItems: 'center',}}/>
					<TextInput
						style={{flex: 1, color:'white'}}
						placeholder="New Password"
						placeholderTextColor='white'
						underlineColorAndroid="transparent"
					/>
			</View>

			<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', borderWidth: 0.5, borderColor: '#00ccff', height: 40, borderRadius: 5, margin: 10,}}>
				<Image source={require('./assets/lock.png')} style={{ padding: 10, margin: 5, height: 25, width: 25, resizeMode: 'stretch', alignItems: 'center',}}/>
					<TextInput
						style={{flex: 1, color:'white'}}
						placeholder="Confirm New Password"
						placeholderTextColor='white'
						underlineColorAndroid="transparent"
					/>
			</View>

			<TouchableOpacity style={{ backgroundColor: '#00a3cc', marginTop: '30%', paddingTop: 20, paddingBottom: 20, paddingLeft: 40, paddingRight: 40, borderRadius: 12,}}
			onPress={() => navigation.navigate('Login')}>
				<Text style={{fontSize: 36, color: 'white'}}>Alterar</Text>
			</TouchableOpacity>
	</View>
	);
  }

  function MainScreen({ navigation }) {
	return (
		<View style={{flex: 1, backgroundColor: '#333',	alignItems: 'center', justifyContent: 'center', backgroundColor: '#333'}}>
			
			<View style={{justifyContent: 'flex-start', width: '100%', backgroundColor: '#333', flexDirection: 'row'}}>
				<Image style={{width: 40, height: 40, marginTop: '10%', marginBottom: '5%',marginLeft: '5%'}} source={require('./assets/open-book.png')}/>
				<Text style={{alignSelf:'center', marginTop: '5%', marginLeft: '10%', color: 'white', fontSize: 24}}> Updates Recentes </Text>
			</View>

			<SafeAreaView style={{ flex: 1, width: '100%', flexDirection: 'column'}}>

      			<ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{ backgroundColor: '#333',}}>

					<View style={{flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 20, paddingVertical: 20, justifyContent: 'space-between'}}>

					<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('./assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('./assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('./assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('./assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('./assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('./assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('./assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('./assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('./assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('./assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('./assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('./assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

					</View>

      			</ScrollView>

    		</SafeAreaView>
		</View>
	);
  }

  function SettingsScreen({ navigation }) {
	return (
		<View style={{flex: 1, backgroundColor: '#333',	alignItems: 'center', justifyContent: 'center', backgroundColor: '#333'}}>
			
			<View style={{justifyContent: 'flex-start', width: '100%', backgroundColor: '#333', flexDirection: 'row', marginBottom: '5%'}}>
				<Image style={{width: 40, height: 40, marginTop: '10%', marginBottom: '5%',marginLeft: '5%'}} source={require('./assets/open-book.png')}/>
				<Text style={{alignSelf:'center', marginTop: '5%', marginLeft: '20%', color: 'white', fontSize: 24}}> Definições </Text>
			</View>

			<Text style={{color: 'white', fontSize: 20,alignSelf: 'flex-start', marginBottom: 15}}>Opeções de Conteudo</Text>

			<View style={{width: '100%', backgroundColor: '#333'}}>
			<TouchableOpacity style={{backgroundColor: '#1a1a1a', flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 20}}>
					<MaterialCommunityIcons name="book" color={'#737373'} size={24}/>
					<View>
						<Text style={{color: 'white', marginLeft: 5}}>Selecionar Fonte</Text>
						<Text style={{color: 'white', marginLeft: 5, fontSize: 10}}>Selecione a Fonte de Leitura</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity style={{backgroundColor: '#1a1a1a', flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 20}}>
					<MaterialCommunityIcons name="earth" color={'#737373'} size={24}/>
					<View>
						<Text style={{color: 'white', marginLeft: 5}}>Selecionar Linguagem</Text>
						<Text style={{color: 'white', marginLeft: 5, fontSize: 10}}>Selecione a Linguagem de Leitura</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity style={{backgroundColor: '#1a1a1a', flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 20}}>
					<MaterialCommunityIcons name="book-open-variant" color={'#737373'} size={24}/>
					<View>
						<Text style={{color: 'white', marginLeft: 5}}>Selecionar Modo de Leitura</Text>
						<Text style={{color: 'white', marginLeft: 5, fontSize: 10}}>Selecione o Modo de Leitura do Aplicativo</Text>
					</View>
				</TouchableOpacity>

				<Text style={{color: 'white', fontSize: 20,alignSelf: 'flex-start', marginVertical: 15}}>Opeções de Conta</Text>

				<TouchableOpacity style={{backgroundColor: '#1a1a1a', flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 20}}>
					<MaterialCommunityIcons name="gift" color={'#737373'} size={24}/>
					<View>
						<Text style={{color: 'white', marginLeft: 5}}>Go Premium</Text>
						<Text style={{color: 'white', marginLeft: 5, fontSize: 10}}>Suporte esta aplicação ao tornarse membro VIP</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity style={{backgroundColor: '#1a1a1a', flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 20}}>
					<MaterialCommunityIcons name="account" color={'#737373'} size={24}/>
					<View>
						<Text style={{color: 'white', marginLeft: 5}}>Conta</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity style={{backgroundColor: '#1a1a1a', flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 20}}>
					<MaterialCommunityIcons name="discord" color={'#737373'} size={24}/>
					<View>
						<Text style={{color: 'white', marginLeft: 5}}>Discord</Text>
						<Text style={{color: 'white', marginLeft: 5, fontSize: 10}}>Junte-se ao nosso Discord</Text>
					</View>
				</TouchableOpacity>

				<Text style={{color: 'white', fontSize: 20,alignSelf: 'flex-start', marginVertical: 15}}>Versão da Aplicação</Text>

				<TouchableOpacity style={{backgroundColor: '#1a1a1a', flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 20}}>
					<MaterialCommunityIcons name="bug" color={'#737373'} size={24}/>
					<View>
						<Text style={{color: 'white', marginLeft: 5}}>Versão</Text>
						<Text style={{color: 'white', marginLeft: 5, fontSize: 10}}>Demasiadas para se contar</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
  }

  function FavoritesScreen({ navigation }) {
	return (
		<View style={{flex: 1, backgroundColor: '#333',	alignItems: 'center', justifyContent: 'center', backgroundColor: '#333'}}>
			
			<View style={{justifyContent: 'flex-start', width: '100%', backgroundColor: '#333', flexDirection: 'row'}}>
				<Image style={{width: 40, height: 40, marginTop: '10%', marginBottom: '5%',marginLeft: '5%'}} source={require('./assets/open-book.png')}/>
				<Text style={{alignSelf:'center', marginTop: '5%', marginLeft: '10%', color: 'white', fontSize: 24}}> Mangas Favoritos </Text>
			</View>

			<SafeAreaView style={{ flex: 1, width: '100%', flexDirection: 'column'}}>

      			<ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{ backgroundColor: '#333',}}>

					<View style={{flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 20, paddingVertical: 20, justifyContent: 'space-between'}}>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('./assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('./assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('./assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('./assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('./assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('./assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('./assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('./assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('./assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('./assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('./assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('./assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('./assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('./assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('./assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

					</View>

      			</ScrollView>

    		</SafeAreaView>
			
		</View>
	);
  }

  function MangaScreen({ navigation }) {
	return (
		<View style={{flex: 1, backgroundColor: '#333',	alignItems: 'center', justifyContent: 'center',}}>
			<View style={{justifyContent: 'flex-start', marginBottom: '20%', width: '100%'}}>
				<Image style={{width: 40, height: 40, marginTop: '10%', marginLeft: '5%'}} source={require('./assets/open-book.png')}/>
			</View>

			<SafeAreaView style={{ flex: 1, paddingTop: 10,}}>
      			<ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{ backgroundColor: '#333', marginHorizontal: 20,}}>
        			<Text style={{ fontSize: 36, color: 'white'}}>
          				Exemplo de Manga
        			</Text>
      			</ScrollView>
    		</SafeAreaView>
		</View>
	);
  }
  
  const Stack = createStackNavigator();

  const Tab = createBottomTabNavigator();

  function MyTabs() {
	return (
	  <Tab.Navigator initialRouteName="Home" tabBarOptions={{ activeTintColor: '#00ccff', style:{backgroundColor: '#1a1a1a',}}} >
		  <Tab.Screen name="Favorites" component={FavoritesScreen}
		 	options={{ 
				tabBarLabel: 'Favorites',
				tabBarIcon: ({ color, size }) => (
					<MaterialCommunityIcons name="heart" color={color} size={size} />
					),
				}}/>

			<Tab.Screen name="Home" component={MainScreen}
		 		options={{ 
					tabBarLabel: 'Discover',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="compass" color={color} size={size} />
						),
					}}/>

			<Tab.Screen name="Settings" component={SettingsScreen}
		 		options={{ 
					tabBarLabel: 'Settings',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="cog" color={color} size={size} />
					),
				}}/>
	  </Tab.Navigator>
	);
  }
  
  function App() {
	return (
	  <NavigationContainer>
		<Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false, borderColor: 'trasnparent'}}>
		<Stack.Screen 
			name="Login"
			component={LoginScreen}
		/>

		<Stack.Screen 
			name="Signin"
			component={SigninScreen}
		/>

		<Stack.Screen 
			name="ForgotPass"
			component={ForgotPass}
		/>

		<Stack.Screen 
			name="Main"
			component={MyTabs}
		/>

		<Stack.Screen 
			name="Manga"
			component={MangaScreen}
		/>

		</Stack.Navigator>
	  </NavigationContainer>
	);
  }
export default App;