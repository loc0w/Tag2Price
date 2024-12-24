import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { COLORS, FONTS, SIZES } from '../constants/theme';
import { Link } from 'expo-router';

export default function Login() {
  const { theme } = useTheme();
  const { signIn } = useAuth();
  const colors = COLORS[theme];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Giriş Yap</Text>
      
      <TextInput 
        placeholder="E-posta"
        style={[styles.input, { 
          backgroundColor: colors.background,
          borderColor: colors.border,
          color: colors.text
        }]}
        placeholderTextColor={colors.text}
      />
      
      <TextInput 
        placeholder="Şifre"
        secureTextEntry
        style={[styles.input, { 
          backgroundColor: colors.background,
          borderColor: colors.border,
          color: colors.text
        }]}
        placeholderTextColor={colors.text}
      />
      
      <TouchableOpacity 
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPressIn={() => signIn('email@example.com', 'password')}
      >
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>
      
      <Link href="/register" asChild>
        <TouchableOpacity>
          <Text style={[styles.linkText, { color: colors.primary }]}>
            Hesabın yok mu? Kayıt ol
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: SIZES.xxl,
    fontFamily: FONTS.bold,
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  button: {
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: SIZES.md,
    fontFamily: FONTS.medium,
  },
  linkText: {
    marginTop: 20,
    fontSize: SIZES.md,
    textAlign: 'center',
  },
});