import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, View } from 'react-native'

const Payments = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
    </View>
  )
}

export default Payments
