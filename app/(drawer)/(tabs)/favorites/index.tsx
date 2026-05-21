import FavoriteCard from '@/components/FavoriteCard'
import { ScrollView, Text, View } from 'react-native'

const favorites = [
  {
    id: 1,
    title: 'Alienware M15 R7',
    subtitle: 'Gaming Laptop',
    price: '$2,399',
    image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6'
  },
  {
    id: 2,
    title: 'iPhone 15 Pro',
    subtitle: 'Apple Smartphone',
    price: '$1,299',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569'
  },
  {
    id: 3,
    title: 'Sony WH-1000XM5',
    subtitle: 'Wireless Headphones',
    price: '$399',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b'
  }
]

const FavoritesScreen = () => {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="pt-16 px-5 pb-6">
        <Text className="text-3xl font-bold text-gray-900">Favorites</Text>

        <Text className="text-gray-500 mt-2">Tus productos favoritos</Text>
      </View>

      <View className="px-5 pb-10">
        {favorites.map((item) => (
          <FavoriteCard
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            price={item.price}
            image={item.image}
          />
        ))}
      </View>
    </ScrollView>
  )
}

export default FavoritesScreen
