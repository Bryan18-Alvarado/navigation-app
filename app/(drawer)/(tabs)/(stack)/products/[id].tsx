import { products } from '@/store/products.store'
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router'
import { useEffect } from 'react'
import { Text, View } from 'react-native'

const ProductScreen = () => {
  const { id } = useLocalSearchParams()

  const navigation = useNavigation()

  const product = products.find((p) => p.id === id)

  useEffect(() => {
    navigation.setOptions({
      title: product?.title ?? 'Producto'
    })
  }, [product])

  if (!product) {
    return <Redirect href="/" />
  }

  return (
    <View className="px-5 mt-2">
      <Text className="font-work-black text-2xl">{product.title}</Text>
      <Text className="mt-2">{product.description}</Text>
      <Text className="font-work-black mt-5 text-xl text-primary">
        ${product.price}
      </Text>
    </View>
  )
}

export default ProductScreen
