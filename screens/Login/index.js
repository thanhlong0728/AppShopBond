import React, {useState, useContext, useEffect} from 'react'
import { View, Text,Image,TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles'
import { Switch, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {TextBox, Loading} from '../../components'
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../navigation/AuthProvider'



const LoginScreen = () => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const navigation = useNavigation()
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, loading} = useContext(AuthContext)
   

    if(loading){
        return  <Loading />
      }
    const changeRegister = () =>{
        navigation.navigate('RegisterScreen')
    }
    const onLogin =()=>{
        login(email,password)
    }

    return (
            <KeyboardAwareScrollView
                enableOnAndroid={true}
                style={styles.container}
            >
                <View style={styles.title}>
                    <Image source={require('../../assets/logo.png')} style={styles.logo} />
                    <Text style={styles.textMainTitle} > SHOP Bond - The Zoo</Text>
                    <Text style={styles.textTitle} >Buy everything with you need...</Text>
                </View>
                <View style={styles.main}>
                    <Text style={styles.textLogin} >ĐĂNG NHẬP</Text>
                    <View style={styles.formInput}>
                        <TextBox name={'Tài khoản email'} value={email} onChange={(value) => setEmail(value)} iconName={'email'} editable={true} />
                    </View>
                    <View style={styles.formInput}>
                        <TextBox name={'Nhập mật khẩu'} value={password} onChange={(value) => setPassword(value)} iconName={'lock'} editable={true} />
                    </View>

                    <View style={styles.setting} >
                        <Text style={styles.textSavePass}>Lưu mật khẩu: </Text>
                        <Switch 
                            value={isSwitchOn} 
                            onValueChange={onToggleSwitch} 
                            color= 'orange'
                            style={styles.buttonSwitch}
                        />
                        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassScreen')} >
                            <Text style={styles.forgotPass}>Quên mật khẩu</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.footter} >
                        <TouchableOpacity onPress={onLogin} style={styles.footterSubmit}  >
                            <Icon name={'key'} size={24} style={styles.icon}/>
                            <Text style={styles.textFootterSubmit} >Đăng nhập</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={changeRegister} >
                            <Text style={styles.textSignUp}>Bạn chưa có tài khoản? Đăng ký</Text>
                        </TouchableOpacity>
                </View>
            
            </KeyboardAwareScrollView>
    )
}

export default LoginScreen
