import { Image } from 'react-native';
export default function Logo() {
    return (
      <Image
        style={{ width: 100, height: 100 }}
        source={require('./assets/EcoTrack-logo.png')}
      />
    );
  }
  