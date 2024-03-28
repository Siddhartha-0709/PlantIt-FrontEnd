import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getDatabase, ref, child, get} from 'firebase/database';
import { useNavigation } from '@react-navigation/native';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const navigation = useNavigation();
  const blogView = (data)=>{
    navigation.navigate('BlogView',{
      data:data
    })
  }
  const getBlogs = async () => {
    const dbRef = ref(getDatabase());
    await get(child(dbRef, `blogs/`))
      .then(snapshot => {
        if (snapshot.exists()) {
          // console.log(Object.values(snapshot.val()));
          const data = Object.values(snapshot.val());
          setBlogs(data);
          console.log(data);
        } else {
          console.log('No data available');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };
  // console.log('Data is - '+data);
  useEffect(() => {
    getBlogs();
  }, []);
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
      {/* <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          marginTop: 10,
        }}>
        <Image
          source={require('../Icons/success.png')}
          style={{height: 50, width: 50}}
        />
        <Text style={{fontSize: 18, fontWeight: '900', color: '#000000'}}>
          Siddhartha Mukherjee
        </Text>
      </View> */}
      <View style={{paddingLeft: 10, paddingRight: 10}}>
        <Text style={{fontSize: 30, fontWeight: '700', color: 'black',fontFamily:'monospace'}}>
          Explore
        </Text>
        <Text style={{fontSize: 20, fontWeight: '600', color: 'grey',fontFamily:'monospace'}}>
          Latest Blogs
        </Text>
      </View>
      <ScrollView style={{height:'85%'}}>
        {blogs.map((blog, index) => (
          <TouchableOpacity key={index} style={{padding: 10, borderBlockColor:'#000000', borderBottomWidth:1}}
          onPress={()=>blogView(blog)}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                padding: 10,
              }}>
              <Image
                source={{uri: blog.publisherImage}}
                style={{height: 50, width: 50, borderRadius: 30}}
              />
              <View style={{flexDirection: 'column', marginLeft: 10,}}>
                <Text style={{fontSize: 20, fontWeight: '900', color: 'black',fontFamily:'monospace'}}>
                  {blog.publisher}
                </Text>
                <Text style={{fontSize: 12, fontWeight: '500', color: 'grey',fontFamily:'monospace'}}>
                  Posted - 3 days ago{' '}
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'column', justifyContent: 'center', marginBottom:10}}>
              <Image
                source={{uri: blog.imageUrl}}
                style={{height: 300, width: '100%', borderRadius: 10}}
              />
              <Text style={{fontSize: 20, fontWeight: '900', color: 'black', fontFamily:'monospace'}}>
                {blog.title}
              </Text>
              <Text style={{fontSize: 15, fontWeight: '400', color: 'grey', fontFamily:'monospace'}} numberOfLines={2}>
                {blog.content}...
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity style={{position:'absolute', top: 60, right: 10, backgroundColor:'black', width:100,height:40, borderRadius:20, elevation:5}}
      onPress={()=>navigation.navigate('BlogUpload')}
      >
        <Text style={{color: '#FFFFFF', fontSize: 20, fontWeight: '700',textAlign:'center',marginTop:'auto',marginBottom:'auto',fontFamily:'monospace'}}>
              Create
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Blog;

const styles = StyleSheet.create({});
