import React, { useContext, useState} from 'react'
import { View, Text,Image,TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles'
import { Switch, Button } from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {TextBox, Loading} from '../../components'
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../navigation/AuthProvider'
import {showNotice} from '../../lib'


const RegisterScreen = () => {
    const navigation = useNavigation()
    const [displayname, setDisplayname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const { register, loading} = useContext(AuthContext)
    if(loading){
      return  <Loading />
    }

    const changeLoginScreen =() =>{
        navigation.goBack()
    }
    const signUp =()=>{
        if(password === confirmPassword){
            register(displayname,email,password)
        }else{
            showNotice('Nhập lại mật khẩu không đúng', true)
        }
    }

    
    return (
            <KeyboardAwareScrollView
                enableOnAndroid={true}
                style={styles.container}
            >
                <View style={styles.main}>
                    <Text style={styles.textRegister} >ĐĂNG KÝ</Text>
                    <View style={styles.formInput}>
                        <TextBox name={'Tên tài khoản'} value={displayname} onChange={(value) => setDisplayname(value)} iconName={'account'} editable={true} />
                    </View>
                    <View style={styles.formInput}>
                        <TextBox name={'Tài khoản email'} value={email} onChange={(value) => setEmail(value)} iconName={'email'} editable={true} />
                    </View>
                    <View style={styles.formInput}>
                        <TextBox name={'Nhập mật khẩu'} value={password} onChange={(value) => setPassword(value)} iconName={'lock'} editable={true} />
                    </View>
                    <View style={styles.formInput}>
                        <TextBox name={'Nhập lại mật khẩu'} value={confirmPassword} onChange={(value) => setConfirmPassword(value)} iconName={'shield-lock'} editable={true} />
                    </View>
                    <TouchableOpacity onPress={changeLoginScreen}>
                        <View style={styles.forgotPass}>
                            <Text >Đã có tài khoản ?</Text>
                        </View>
                        
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.footterSubmit} onPress={signUp} >
                    <Icon name={'key'} size={24} style={styles.icon}/>
                    <Text style={styles.textFootterSubmit} >Đăng ký</Text>
                </TouchableOpacity>
            
            </KeyboardAwareScrollView>
    )
}

export default RegisterScreen
