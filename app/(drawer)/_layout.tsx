import CustomDrawer from '@/components/shared/CustomDrawer'
import { Ionicons } from '@expo/vector-icons'
import Drawer from 'expo-router/drawer'

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        headerShown: false,
        overlayColor: 'rgba(0, 0, 0, 0.4)',
        drawerActiveTintColor: 'indigo',
        headerShadowVisible: false,
        sceneStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: 'Tabs + Stack',
          title: 'Tabs + Stack',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="layers-outline" size={size} color={color} />
          )
        }}
      />

      {/* 2. Opciones anteriores */}
      <Drawer.Screen
        name="user/index"
        options={{
          drawerLabel: 'Home',
          title: 'Usuario',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          )
        }}
      />
      <Drawer.Screen
        name="schedule/index"
        options={{
          drawerLabel: 'Horario',
          title: 'Horario',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          )
        }}
      />
    </Drawer>
  )
}

export default DrawerLayout
