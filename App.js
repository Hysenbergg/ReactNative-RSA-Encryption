import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { JSEncrypt, } from 'jsencrypt/lib/JSEncrypt';

var utf8 = require('utf8');
var base64 = require('base-64');

const _publicKey = "-----BEGIN PUBLIC KEY-----\n" +
  "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDgUbczrFBMuY+Ur9XqvXuu7B95\n" +
  "wxa8KXo+5jwVMPjW1NNs2iccS7v+O7NKsAOU3BXBB+uchwSSpK7bOGv0qLbi72oE\n" +
  "WxXeMcF17a465/py/mH24n8GP7H/1PEOAj3uVUySIEeVDIMuvHnFs6yzQml3dgGz\n" +
  "Jy6D3D/1SazdbfAD9QIDAQAB\n" +
  "-----END PUBLIC KEY-----";

const message = 'Hysenbergg';

export default function App() {
  
  function encrypt () {
    let encrypt = new JSEncrypt();
    encrypt.setPublicKey(_publicKey);           //We make our own public key available.
    console.log("publicKey: " + _publicKey);  
    let encrypted = encrypt.encrypt(message);   //We use our own public key for encryption.
    console.log("sifre: "  + encrypted); 

    var bytes = utf8.encode(encrypted);         //We convert the encrypted text to utf8 format.
    var encoded = base64.encode(bytes);         //We encrypt the utf8 text with base64.
    console.log('base64: '+ encoded);
  }

  return (
    <View style={styles.container}>
      <Text>Press to perform the encryption operation.</Text>
      <Button title="Encrypt" onPress={() => encrypt()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
