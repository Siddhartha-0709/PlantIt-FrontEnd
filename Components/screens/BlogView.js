import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import React from 'react';
const BlogView = ({route}) => {
  const data = route.params.data;
  const text = data.content.replace(/\{'\\n'\}/g, '\n');

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
      <ScrollView style={{paddingLeft:10, paddingRight:10, height:'95%'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
            elevation:5
          }}>
          <Image
            source={{uri: data.publisherImage}}
            style={{height: 50, width: 50, borderRadius: 25}}
          />
          <Text style={{color: '#000000', fontSize: 18, fontWeight: '900', fontFamily:'monospace'}}>
            {data.publisher}
          </Text>
        </View>
        <Image
          source={{uri: data.imageUrl}}
          style={{height: 300, width: '100%', borderRadius: 10}}
        />
        <View style={{marginLeft:'auto',marginRight:'auto',paddingTop:10}}>
          <Text style={{color:'#000000', fontSize:20, fontWeight:'700', fontFamily:'monospace'}}>{data.title}</Text>
          <Text style={{color:'#000000', fontSize:18, marginTop:15, fontFamily:'monospace', textAlign:'justify'}}>{text}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BlogView;

const styles = StyleSheet.create({});
