import {Button, StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {
  ButtonSubmit,
  useDivisionQuery,
  useLoginMutation,
  colors,
} from '../../features/authentication';

export default function Login() {
  const {token, username} = useSelector(state => state.auth);

  const [
    login,
    {isLoading: loadingLogin, isError: errorLogin, isSuccess: successLogin},
  ] = useLoginMutation();

  return (
    <View>
      <ActivityIndicator
        color={'black'}
        size={'large'}
        animating={loadingLogin}
      />
      <Text style={{fontSize: 50, color: 'black'}}>
        {loadingLogin
          ? 'Memuat login...'
          : successLogin
          ? 'Sukses login'
          : errorLogin
          ? 'Gagal login'
          : 'Silahkan login'}
      </Text>
      <Button
        title="login"
        onPress={() =>
          login({
            credential: {email: 'tester@gmail.com', password: 'rahasia123'},
            navigation,
          })
        }
      />
      <Text style={{fontSize: 25, color: colors.primary}}>
        Nama: {username}
      </Text>
      <Text style={{fontSize: 25, color: colors.primary}}>Token: {token}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
