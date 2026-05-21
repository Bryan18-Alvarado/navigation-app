import { useState } from 'react'
import { Pressable, ScrollView, Switch, Text, View } from 'react-native'

const SettingsScreen = () => {
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="px-5 mt-8">
        <Text className="text-gray-400 uppercase text-xs mb-3">Account</Text>

        <View className="bg-white rounded-3xl overflow-hidden">
          <Pressable className="p-5 border-b border-gray-100">
            <Text className="text-base font-semibold text-gray-800">
              Edit Profile
            </Text>
          </Pressable>

          <Pressable className="p-5 border-b border-gray-100">
            <Text className="text-base font-semibold text-gray-800">
              Change Password
            </Text>
          </Pressable>

          <Pressable className="p-5">
            <Text className="text-base font-semibold text-gray-800">
              Payment Methods
            </Text>
          </Pressable>
        </View>
      </View>

      <View className="px-5 mt-8">
        <Text className="text-gray-400 uppercase text-xs mb-3">
          Preferences
        </Text>

        <View className="bg-white rounded-3xl overflow-hidden">
          <View className="p-5 flex-row items-center justify-between border-b border-gray-100">
            <Text className="text-base font-semibold text-gray-800">
              Notifications
            </Text>

            <Switch value={notifications} onValueChange={setNotifications} />
          </View>

          <View className="p-5 flex-row items-center justify-between">
            <Text className="text-base font-semibold text-gray-800">
              Dark Mode
            </Text>

            <Switch value={darkMode} onValueChange={setDarkMode} />
          </View>
        </View>
      </View>

      <View className="px-5 mt-8">
        <Text className="text-gray-400 uppercase text-xs mb-3">More</Text>

        <View className="bg-white rounded-3xl overflow-hidden">
          <Pressable className="p-5 border-b border-gray-100">
            <Text className="text-base font-semibold text-gray-800">
              Help Center
            </Text>
          </Pressable>

          <Pressable className="p-5 border-b border-gray-100">
            <Text className="text-base font-semibold text-gray-800">
              Privacy Policy
            </Text>
          </Pressable>

          <Pressable className="p-5">
            <Text className="text-red-500 font-bold text-base">Logout</Text>
          </Pressable>
        </View>
      </View>

      <View className="h-10" />
    </ScrollView>
  )
}

export default SettingsScreen
