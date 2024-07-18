import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, TextInput, TouchableOpacity, Text, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Navigate to the next screen or perform any action here
  };

  return (


    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/bgimg.png')}
          style={styles.reactLogo}
        />
    }>
      
     <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Questions.</ThemedText>
      </ThemedView>
      <Collapsible title="QUESTION 1 OF 4">
      <View style={styles.formContainer}>
        <ThemedText type="title">Company/Organization</ThemedText>
        
        <View>
          <ThemedText>Name:</ThemedText>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="name"
            defaultValue=""
          />
          {errors.name && <ThemedText>This is required.</ThemedText>}
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      </Collapsible>
      <Collapsible title="QUESTION 2 OF 4">
      <View style={styles.formContainer}>
        <ThemedText type="title">Job Title</ThemedText>
        <View>
          <ThemedText>Profile:</ThemedText>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="profile"
            defaultValue=""
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
          {errors.profile && <ThemedText>This is required.</ThemedText>}
        </View>
      </View>
      </Collapsible>
      <Collapsible title="QUESTION 3 OF 4">
      <View style={styles.formContainer}>
        <ThemedText type="title">Are you currently a student?</ThemedText>
        <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>YES</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>NO</Text>
        </TouchableOpacity>
      </View>
      </Collapsible>
      <Collapsible title="QUESTION 4 OF 4">
      <View style={styles.formContainer}>
        <ThemedText type="title">Where did you hear about this event?</ThemedText>
        <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>LinkedIn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Instagram</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Twitter</Text>
        </TouchableOpacity>
      </View>
      </Collapsible>
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  formContainer: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    backgroundColor: '#6C63FF',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  reactLogo: {
    height: 400,
    width: 400,
    top: 0,
    left: 0,
    position: 'absolute',
  },
});
