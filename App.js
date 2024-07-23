//****************** react-native-msal package ******************//

// import React from 'react';
// import { Button, StyleSheet, View } from 'react-native';
// import { PublicClientApplication } from 'react-native-msal';

// const msalConfig = {
//   auth: {
//     clientId: 'YOUR_CLIENT_ID',
//     authority: 'https://login.microsoftonline.com/YOUR_TENANT_ID',
//     redirectUri: 'msauth://com.yourappname/callback',
//   },
// };

// const pca = new PublicClientApplication(msalConfig);

// const App = () => {
//   const handleLogin = async () => {
//     try {
//       const loginResponse = await pca.acquireToken({
//         scopes: ['User.Read'],
//       });
//       console.log('Login response:', loginResponse);
//     } catch (error) {
//       console.log('Login error:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Button title="Login with Microsoft" onPress={handleLogin} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default App;


//****************** react-native-app-auth package ******************//

// import React from 'react';
// import { Button, StyleSheet, View } from 'react-native';
// import { authorize } from 'react-native-app-auth';

// const config = {
//   issuer: 'https://login.microsoftonline.com/common/v2.0',
//   clientId: 'f6064e9a-bb7f-4297-8ec5-1a3185976be8',
//   redirectUrl: 'org.reactjs.native.example.AwesomeProject://auth',
//   scopes: ['openid', 'profile', 'email', 'offline_access'],
// };

// const App = () => {
//   const handleLogin = async () => {
//     try {
//       const result = await authorize(config);
//       console.log('Login response:', result);
//     } catch (error) {
//       console.log('Login error:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Button title="Login with Microsoft" onPress={handleLogin} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default App;



