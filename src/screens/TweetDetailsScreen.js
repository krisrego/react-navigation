import React, { useLayoutEffect } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import TweetContent from '../components/TweetContent'

const TweetDetailsScreen = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { params } = route

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: params.tweet.author.name
    })
  }, [navigation, params])

  return (
    <View style={styles.container}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <TweetContent tweet={params.tweet} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default TweetDetailsScreen
