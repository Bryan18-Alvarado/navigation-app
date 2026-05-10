import CustomButton from '@/components/shared/CustomButton'
import { Link } from 'expo-router'
import { View } from 'react-native'

const App = () => {
  return (
    <View className="flex-1 px-10 py-20 bg-white">
      <CustomButton
        onPress={() => console.log('Botón presionado')}
        className="mb-5"
      >
        Click Me
      </CustomButton>

      <Link href="/products" asChild>
        <CustomButton color="secondary" className="mb-5">
          Ver Productos
        </CustomButton>
      </Link>

      <Link href="/profile" asChild>
        <CustomButton color="tertiary">Mi Perfil</CustomButton>
      </Link>

      <Link href="/settings" asChild>
        <CustomButton color="other">Configuraciones</CustomButton>
      </Link>
    </View>
  )
}

export default App
