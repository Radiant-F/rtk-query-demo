import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  useDivisionQuery,
  useUserQuery,
} from '../../features/authentication/services/authApiSlice';

export default function Home() {
  const {isFetching} = useUserQuery();
  return (
    <View>
      <Text>Home</Text>
      <ActivityIndicator
        color={'black'}
        size={'large'}
        animating={isFetching}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
