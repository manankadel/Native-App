import { Image, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/bgimg.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Art show 🎨</ThemedText>
      </ThemedView>
      <ThemedText>
          by Olivia Adams
          </ThemedText>
      <ThemedView style={styles.stepContainer}>
      
        <ThemedText type="subtitle"> <Image source={require('@/assets/images/calendar_61469.png')} style={{ width: 20, height: 20 }} /> Monday, November 13, 2023
        
        </ThemedText>
        <ThemedText>
              6:00 PM to 10:00 PM
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
      
        <ThemedText type="subtitle"> <Image source={require('@/assets/images/location.png')} style={{ width: 20, height: 20 }} /> Lower Manhattan
        
        </ThemedText>
        <ThemedText>
              Join to see full address
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
      
        <ThemedText type="subtitle"> <Image source={require('@/assets/images/ticket_202796.png')} style={{ width: 20, height: 20 }} /> 78/100 Tickets left
        
        </ThemedText>
        <ThemedText>
              100+ invited
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
      
        <ThemedText type="subtitle"> <Image source={require('@/assets/images/dollar-symbol_63977.png')} style={{ width: 20, height: 20 }} /> $10.00 - $50.00
        
        </ThemedText>
      </ThemedView>


      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">About this event</ThemedText>
        <ThemedText>
        Come join me in celebrating my 25th birthday! I can't wait to celebrate with all of you, so let's make it a night to remember. See you at the party!
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Find this event</ThemedText>
        
      </ThemedView>

      

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 400,
    width: 400,
    top: 0,
    left: 0,
    position: 'absolute',
  },
});
