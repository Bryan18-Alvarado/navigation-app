import { Ionicons } from '@expo/vector-icons'
import { Image, Text, TouchableOpacity, View } from 'react-native'

interface FavoriteCardProps {
  title: string
  subtitle: string
  price: string
  image: string
}

const FavoriteCard = ({ title, subtitle, price, image }: FavoriteCardProps) => {
  return (
    <TouchableOpacity className="bg-white rounded-3xl p-4 mb-4 flex-row items-center shadow-sm">
      <Image source={{ uri: image }} className="w-24 h-24 rounded-2xl" />

      <View className="flex-1 ml-4">
        <Text numberOfLines={1} className="text-lg font-bold text-gray-800">
          {title}
        </Text>

        <Text className="text-gray-500 mt-1">{subtitle}</Text>

        <Text className="text-primary font-bold text-lg mt-2">{price}</Text>
      </View>

      <Ionicons name="heart" size={24} color="red" />
    </TouchableOpacity>
  )
}

export default FavoriteCard
