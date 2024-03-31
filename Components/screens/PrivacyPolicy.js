import React from 'react';
import {View, Text, ScrollView, StatusBar} from 'react-native';

const PrivacyPolicy = () => {
  return (
    <>
      <ScrollView contentContainerStyle={{paddingHorizontal: 0}}>
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
        <View style={{paddingHorizontal: 10}}>
          <View
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
            }}>
            <Text
              style={{
                fontSize: 18,
                color: '#FFFFFF',
                fontWeight: '600',
                fontFamily: 'monospace',
                textAlign: 'center',
              }}>
              Privacy Policy
            </Text>
          </View>
          <Text
            style={{
              marginTop: 10,
              fontSize: 20,
              fontWeight: 'bold',
              color: '#000',
              fontFamily:'monospace'
            }}>
            Safeguarding Your Data Security and Privacy Needs
          </Text>
          <Text style={{marginTop: 10, fontSize: 16, color: '#333', fontFamily:'monospace'}}>
            Welcome to PlantIT, Our priority is to ensure the privacy and
            security of your personal information while providing you with a
            seamless experience using our platform. This Privacy Policy outlines
            how we collect, use, disclose, and protect your information in
            connection with our application, including its e-commerce features
            for selling and buying plants and plant products, as well as
            AI-based plant disease identification and prediction for gardening,
            and farming crops.
          </Text>

          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              fontWeight: 'bold',
              color: '#000',
              fontFamily:'monospace'
            }}>
            Information We Collect:
          </Text>
          <Text style={{marginTop: 10, fontSize: 16, color: '#333', fontFamily:'monospace'}}>
             Personal Information: When you register an account, make a
            purchase, or use our AI-based plant services, we may collect
            personal information such as your name, email address, shipping
            address, payment details, and any other information necessary to
            provide you with our services.
          </Text>
          <Text style={{marginTop: 10,fontSize: 16, color: '#333', fontFamily:'monospace'}}>
             AI Data: When you use our AI-based plant services, we may collect
            data related to plant images, disease identification results, and
            prediction outcomes to improve the accuracy and functionality of our
            AI algorithms.
          </Text>
          <Text style={{marginTop: 10,fontSize: 16, color: '#333', fontFamily:'monospace'}}>
             Usage Information: We may collect information about your
            interactions with our application, including browsing activity,
            search queries, and preferences.
          </Text>

          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              fontWeight: 'bold',
              color: '#000',
              fontFamily:'monospace'
            }}>
            How We Use Your Information:
          </Text>
          <Text style={{marginTop: 10, fontSize: 16, color: '#333', fontFamily:'monospace'}}>
             Provide Services: We use your information to facilitate
            transactions, deliver products, and provide AI-based plant services.
          </Text>
          <Text style={{fontSize: 16, color: '#333', fontFamily:'monospace'}}>
             Improve Services: We analyze usage data and AI data to improve our
            application's functionality, content, and user experience.
          </Text>
          <Text style={{fontSize: 16, color: '#333', fontFamily:'monospace'}}>
             Research and Development: We may use AI data for research and
            development purposes to enhance our AI algorithms and develop new
            features.
          </Text>

          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              fontWeight: 'bold',
              color: '#000',
              fontFamily:'monospace'
            }}>
            Information Sharing:
          </Text>
          <Text style={{marginTop: 10, fontSize: 16, color: '#333',fontFamily:'monospace'}}>
             Third-Party Service Providers: We may share your information with
            third-party service providers who assist us in operating our
            platform, processing transactions, and providing AI services.
          </Text>
          <Text style={{fontSize: 16, color: '#333',fontFamily:'monospace'}}>
             Legal Compliance: We may disclose your information in response to
            legal requests or to comply with applicable laws, regulations, or
            legal processes.
          </Text>

          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              fontWeight: 'bold',
              color: '#000', fontFamily:'monospace'
            }}>
            Data Security:
          </Text>
          <Text style={{marginTop: 10, fontSize: 16, color: '#333',fontFamily:'monospace'}}>
             We implement reasonable security measures to protect your
            information from unauthorized access, disclosure, alteration, or
            destruction.
          </Text>

          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              fontWeight: 'bold',
              color: '#000', fontFamily:'monospace'
            }}>
            Children's Privacy:
          </Text>
          <Text style={{marginTop: 10, fontSize: 16, color: '#333',fontFamily:'monospace'}}>
             Our services are not directed to children under the age of 13, and
            we do not knowingly collect personal information from children.
          </Text>

          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              fontWeight: 'bold',
              color: '#000', fontFamily:'monospace'
            }}>
            Updates to Privacy Policy:
          </Text>
          <Text style={{marginTop: 10, fontSize: 16, color: '#333', fontFamily:'monospace'}}>
             We may update this Privacy Policy from time to time. Any changes
            will be posted on this page, and we encourage you to review the
            Privacy Policy periodically.
          </Text>

          <Text style={{marginTop: 10, fontSize: 20, color: '#333', fontFamily:'monospace',fontSize: 16,}}>
            By using our application, you consent to the collection, use, and
            disclosure of your information as described in this Privacy Policy.
            Thank you for trusting us with your privacy.
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default PrivacyPolicy;
