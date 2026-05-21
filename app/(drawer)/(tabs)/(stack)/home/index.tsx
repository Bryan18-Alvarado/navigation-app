import CustomButton from '@/components/shared/CustomButton'
import { DrawerActions } from '@react-navigation/native'
import { Link, router, useNavigation } from 'expo-router'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  const navigation = useNavigation()

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer)
  }

  return (
    <SafeAreaView className="flex-1">
      <View className="px-10 mt-5 gap-4">
        <CustomButton color="primary" onPress={() => router.push('/products')}>
          Productos
        </CustomButton>

        <CustomButton color="secondary" onPress={() => router.push('/profile')}>
          Perfil
        </CustomButton>

        <CustomButton color="tertiary" onPress={() => router.push('/settings')}>
          Ajustes
        </CustomButton>

        <Link href={'/products'} asChild>
          <CustomButton variant="text-only" color="primary">
            Productos
          </CustomButton>
        </Link>

        <View className="mt-6">
          <CustomButton onPress={onToggleDrawer}>Abrir menú</CustomButton>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
