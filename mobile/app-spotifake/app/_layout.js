import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack screenOptions={{
      headerShown: false,
      contentStyle: { backgroundColor: '#250902' } // Define o fundo diretamente no contentStyle
    }} />
  );
};

export default Layout;
