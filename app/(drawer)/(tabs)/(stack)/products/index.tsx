import { products } from '@/store/products.store'
import { Link } from 'expo-router'
import { FlatList, Image, Text, View } from 'react-native'

const ProductsScreen = () => {
  return (
    <View className="flex-1 bg-white px-4 pt-4">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
        renderItem={({ item }) => (
          <View className="mt-5 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
            <Image
              source={{ uri: item.image }}
              className="h-56 w-full"
              resizeMode="cover"
            />

            <View className="p-4">
              <Text className="text-xl font-work-black text-black">
                {item.title}
              </Text>

              <Text
                numberOfLines={3}
                className="mt-2 text-sm leading-5 text-gray-500"
              >
                {item.description}
              </Text>

              <View className="mt-4 flex-row items-center justify-between">
                <Text className="text-xl font-work-black text-primary">
                  ${item.price}
                </Text>

                <Link
                  href={`/products/${item.id}`}
                  className="min-w-[120px] rounded-full bg-primary px-4 py-2 text-sm font-work-black text-white text-center"
                >
                  Ver detalles
                </Link>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default ProductsScreen
