import xoxo from "@/assets/images/xoxo.png";
import { ImageBackground } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={xoxo}
        contentFit="cover"
        style={styles.image}
      >
        <Text style={styles.text}>Tire Shop</Text>
      </ImageBackground>
    </View>
  )
}

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    contentFit: '',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  }
})