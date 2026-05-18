import Drawer from 'expo-router/drawer'

const DrawerLayout = () => {
  return (
    <Drawer>
      <Drawer.Screen
        name="user/index"
        options={{
          drawerLabel: 'Usuario',
          title: 'usuario'
        }}
      />

      <Drawer.Screen
        name="schedule/index"
        options={{
          drawerLabel: 'Horario',
          title: 'Horario'
        }}
      />
    </Drawer>
  )
}
export default DrawerLayout
