import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
const BlogView = ({route}) => {
  const data = route.params.data;
  const text = data.content.replace(/\{'\\n'\}/g, '\n');

  return (
    <SafeAreaView style={{padding: 10}}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Image
            source={{uri: data.publisherImage}}
            style={{height: 50, width: 50, borderRadius: 25}}
          />
          <Text style={{color: '#000000', fontSize: 18, fontWeight: '900'}}>
            {data.publisher}
          </Text>
        </View>
        <Image
          source={{uri: data.imageUrl}}
          style={{height: 300, width: '100%', borderRadius: 10}}
        />
        <View style={{marginLeft:'auto',marginRight:'auto'}}>
          <Text style={{color:'#000000', fontSize:20, fontWeight:'700'}}>{data.title}</Text>
          <Text style={{color:'#000000', fontSize:18, marginTop:15}}>{text}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BlogView;

const styles = StyleSheet.create({});
