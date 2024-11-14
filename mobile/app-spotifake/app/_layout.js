import { Stack } from 'expo-router';
import { AuthProvider } from '../scripts/authContext';

const Layout = () => {


  return (
    <AuthProvider>
      <Stack screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#250902' },
      }} />
    </AuthProvider>
  );
};

export default Layout;
