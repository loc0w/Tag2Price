import { View, Text } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { COLORS } from '../constants/theme';

export default function Home() {
  const { theme } = useTheme();
  const colors = COLORS[theme];

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <Text style={{ color: colors.text }}>Ana Sayfa</Text>
    </View>
  );
}