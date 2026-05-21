import { Image, ScrollView, Text, View } from 'react-native'

const ProfileScreen = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="items-center pt-16 pb-8 bg-blue-600 rounded-b-[40px]">
        <Image
          source={{
            uri: 'https://i.pravatar.cc/300'
          }}
          className="w-32 h-32 rounded-full border-4 border-white"
        />

        <Text className="mt-4 text-2xl font-bold text-white">
          Bryan Alvarado
        </Text>

        <Text className="text-blue-100 text-base">Ingeniero en sistemas</Text>
      </View>

      <View className="px-5 mt-8 gap-4">
        <View className="bg-gray-100 p-5 rounded-3xl">
          <Text className="text-gray-500 text-sm">UNIVERSIDAD</Text>
          <Text className="text-lg font-semibold text-gray-800 mt-1">
            URACCAN
          </Text>
        </View>

        <View className="bg-gray-100 p-5 rounded-3xl">
          <Text className="text-gray-500 text-sm">TELEFONO</Text>
          <Text className="text-lg font-semibold text-gray-800 mt-1">
            +505 8888 8888
          </Text>
        </View>

        <View className="bg-gray-100 p-5 rounded-3xl">
          <Text className="text-gray-500 text-sm">Location</Text>
          <Text className="text-lg font-semibold text-gray-800 mt-1">
            Nueva guinea, Nicaragua
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default ProfileScreen
