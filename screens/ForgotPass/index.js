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


const ForgotPassScreen = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const { forgotPassword, loading} = useContext(AuthContext)
    if(loading){
      return  <Loading />
    }

    const handleForgot =() =>{
        forgotPassword(email)
    }
    

    
    return (
            <KeyboardAwareScrollView
                enableOnAndroid={true}
                style={styles.container}
            >
                <View style={styles.main}>
                    <Text style={styles.textRegister} >Quên Mật Khẩu</Text>
                    <View style={styles.formInput}>
                        <TextBox name={'Tài khoản email'} value={email} onChange={(value) => setEmail(value)} iconName={'email'} editable={true} />
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                        <View style={styles.forgotPass}>
                            <Text >Đã có tài khoản ?</Text>
                        </View>
                        
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.footterSubmit} onPress={handleForgot} >
                    <Icon name={'key'} size={24} style={styles.icon}/>
                    <Text style={styles.textFootterSubmit} >Xác nhận</Text>
                </TouchableOpacity>
            
            </KeyboardAwareScrollView>
    )
}

export default ForgotPassScreen
