import { Pressable, PressableProps, Text } from 'react-native'

interface Props extends PressableProps {
  children: string
  color?: 'primary' | 'secondary' | 'tertiary' | 'other'
  variant?: 'contained' | 'text-only'
}

const CustomButton = ({
  children,
  color = 'primary',
  onPress,
  variant = 'contained'
}: Props) => {
  const btnColor = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary',
    other: 'bg-other'
  }[color]

  return (
    <Pressable
      className={`p-4 rounded-xl items-center active:opacity-70 ${variant === 'contained' ? btnColor : ''}`}
      onPress={onPress}
    >
      <Text className="text-white font-work-medium text-lg">{children}</Text>
    </Pressable>
  )
}

export default CustomButton
