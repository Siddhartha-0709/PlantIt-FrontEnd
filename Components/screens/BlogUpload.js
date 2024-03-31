import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
  ActivityIndicator,
  Modal,
} from 'react-native';
import React from 'react';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import {launchImageLibrary} from 'react-native-image-picker';
import {useState} from 'react';
import storage from '@react-native-firebase/storage';
import firebase from '@react-native-firebase/app';
import {useNavigation} from '@react-navigation/native';
import database from '@react-native-firebase/database';
import {set} from 'firebase/database';

const BlogUpload = ({route}) => {
  const userAccount = route.params.userAccount;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const navigation = useNavigation();
  const [showLoad, setShowLoad] = useState(false);
  const pickImage = async () => {
    let options = {
      mediaType: 'photo',
      quality: 0.5,
      base64: true,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('UserCancelled Picker');
        return;
      } else if (response.error) {
        console.log(response.error);
        return;
      }
      setImageUri(response.assets[0]);
    });
  };
  const handleBlogUpload = async () => {
    setShowLoad(true);
    var url = '';
    console.log(imageUri);
    const reference = storage().ref(imageUri.fileName);
    const task = reference.putFile(imageUri.uri);
    task.on('state_changed', taskSnapshot => {
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
      );
    });
    try {
      await task;
      console.log('Image uploaded to the bucket!');
      url = await storage().ref(imageUri.fileName).getDownloadURL();
      console.log(url);
    } catch (error) {
      console.error('Error uploading image:', error);
    }

    const database = firebase.database();
    const usersRef = database.ref('blogs');
    const date = new Date();
    console.log(date);
    try {
      usersRef.push({
        title: title,
        content: content,
        imageUrl: url,
        publisher: userAccount.name,
        publisherImage: userAccount.photo,
        publisherId: userAccount.id,
        publisherEmail: userAccount.email,
        datePosted: date,
      });
      // console.log('Blog uploaded successfully');
      alert('Blog uploaded successfully');
      setShowLoad(false);
      navigation.navigate('Blogs', {userAccount:userAccount});
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#E2F4C5" />
      <View style={{height: 50, backgroundColor: '#E2F4C5'}}>
        <Text
          style={{
            position: 'absolute',
            top: 0,
            left: 10,
            fontSize: 25,
            color: '#000000',
            zIndex: 1,
            fontWeight: '900',
            fontFamily: 'monospace',
          }}>
          Plant<Text style={{color: 'red', fontWeight: '900'}}>It</Text>
        </Text>
      </View>
      <View
        style={{
          marginBottom: 10,
          paddingLeft: 10,
          paddingRight: 10,
          marginTop: 20,
          elevation: 6,
        }}>
        <Text
          style={{
            fontSize: 25,
            color: '#000000',
            fontWeight: '900',
            fontFamily: 'monospace',
          }}>
          Create New Post
        </Text>
      </View>
      <View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <Image
            source={{uri: userAccount.photo}}
            style={{
              width: 50,
              height: 50,
              marginLeft: 10,
              marginTop: 10,
              marginTop: 'auto',
              marginBottom: 'auto',
              borderRadius: 30,
            }}
          />
          <Text
            style={{
              color: '#000000',
              fontWeight: '800',
              fontFamily: 'monospace',
              fontSize: 16,
              marginLeft: 1,
            }}>
            {userAccount.name}
          </Text>
        </View>
        <View style={{paddingLeft: 10, paddingRight: 10, marginTop: 10}}>
          <Text
            style={{
              fontFamily: 'monospace',
              fontSize: 15,
              fontWeight: '900',
              marginBottom: 5,
              color: '#000000',
            }}>
            Blog Title
          </Text>
          <TextInput
            style={{
              height: 50,
              borderColor: '#000000',
              borderWidth: 1,
              borderRadius: 8,
              paddingLeft: 10,
              fontFamily: 'monospace',
              fontSize: 18,
              fontWeight: '800',
              color: '#000000',
            }}
            maxLength={40}
            placeholder="A Stunning Blog Title"
            placeholderTextColor={'grey'}
            onChangeText={text => {
              setTitle(text);
            }}
          />
          <Text
            style={{
              fontFamily: 'monospace',
              fontSize: 15,
              fontWeight: '900',
              marginBottom: 5,
              color: '#000000',
              marginTop: 10,
            }}>
            Blog Content
          </Text>
          <TextInput
            style={{
              height: 100,
              borderColor: '#000000',
              borderWidth: 1,
              borderRadius: 8,
              paddingLeft: 10,
              fontFamily: 'monospace',
              fontSize: 15,
              fontWeight: '800',
              color: '#000000',
            }}
            maxLength={800}
            placeholder="An Engaging Blog Content"
            placeholderTextColor={'grey'}
            onChangeText={text => {
              setContent(text);
            }}
          />
        </View>
        <View style={{paddingLeft: 10, paddingRight: 10, marginTop: 10}}>
          <TouchableOpacity
            onPress={pickImage}
            style={{
              marginTop: 10,
              borderRadius: 10,
              backgroundColor: '#B6BBC4',
              height: 250,
              alignItems: 'center',
              justifyContent: 'center',
              elevation: 5,
            }}>
            {!imageUri ? (
              <>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 18,
                    fontWeight: '700',
                    fontFamily: 'monospace',
                  }}>
                  Select an Image from the Gallery
                </Text>
              </>
            ) : (
              <>
                <Image
                  source={{uri: imageUri.uri}}
                  style={{
                    width: '100%',
                    height: 250,
                    borderRadius: 10,
                    resizeMode: 'cover',
                  }}
                />
              </>
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            height: 50,
            marginBottom: 10,
            backgroundColor: '#000000',
            minWidth: 200,
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: 30,
            alignContent: 'center',
            justifyContent: 'center',
            marginTop: 30,
          }}
          onPress={handleBlogUpload}>
          <Text
            style={{
              fontSize: 18,
              color: '#FFFFFF',
              fontWeight: '600',
              fontFamily: 'monospace',
              textAlign: 'center',
            }}>
            Create a Post
          </Text>
        </TouchableOpacity>
      </View>
      {showLoad?(<Modal style={{}}>
        <SkypeIndicator color="black" size={80} />
        <Text style={{fontFamily: 'monospace', textAlign: 'center', color:'#000000',position:"absolute", top:500, left:'30%', fontSize:18}}>
          Uploading Post
        </Text>
      </Modal>):(<></>)}
    </SafeAreaView>
  );
};

export default BlogUpload;

const styles = StyleSheet.create({});
