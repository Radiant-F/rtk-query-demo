import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useLoginMutation} from '../../features/authentication';
import {useUserQuery} from '../../features/authentication/services/authApiSlice';

export default function SplashScreen({navigation}) {
  const [login, {isLoading}] = useLoginMutation();
  useEffect(() => {
    // login({
    //   credential: {email: 'tester@gmail.com', password: 'rahasia123'},
    //   navigation,
    // });
  }, []);

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
