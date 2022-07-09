import { useNavigation } from '@react-navigation/native'
import React, {createContext, useState} from 'react'
import {auth} from '../firebase'
import {ShowToast} from '../help/showToast'

export const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
    const navigation = useNavigation()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                login: async (email, password) => {
                  setLoading(true)
                  await auth.signInWithEmailAndPassword(email, password)
                  .then((userCredential) => {
                    var user = userCredential.user;
                    setUser(user)
                    ShowToast('Đăng nhập thành công')
                  })
                  .catch((error) => {
                    ShowToast(error.message)
                  });
                  setLoading(false)
                },
                register : async (displayname, email, password) => {
                    setLoading(true)
                    await auth.createUserWithEmailAndPassword(email, password)
                    .then((userCredential) => {
                      userCredential.user.updateProfile({
                        displayName: displayname,
                        photoURL: "https://firebasestorage.googleapis.com/v0/b/shopbond-cc6cb.appspot.com/o/default%2Favatar_default.png?alt=media&token=e1cad5ef-fdf4-464c-b308-8b92fb48485b"
                      }).then(() => {
                        navigation.navigate('LoginScreen')
                        ShowToast('Đăng ký thành công!!!')
                      }).catch((error) => {

                      });  
                    })
                    .catch((error) => {
                      ShowToast(error.message)
                    });
                    setLoading(false)
                },
                logout: async () => {
                  setLoading(true)
                  await auth.signOut().then(() => {
                    setUser(null)
                  }).catch((error) => {
                    ShowToast(error.message)
                  });
                  setLoading(false)
                },
                updateInfo: async(displayName)=>{
                  setLoading(true)
                  await auth.currentUser.updateProfile({
                    displayName: displayName
                  }).then(()=>{
                    ShowToast('Cập nhật thành công!!!')
                  }).catch((error) =>{
                    ShowToast(error.message)
                  })
                  setLoading(false)
                },
                forgotPassword : async (email) => {
                  setLoading(true)
                  await auth.sendPasswordResetEmail(email)
                    .then(function (user) {
                      alert('Vui lòng kiểm tra email...')
                    }).catch(function (e) {
                      ShowToast('Email chưa đăng ký')
                    })
                    setLoading(false)
                }
            }}
        >{children}</AuthContext.Provider>
    )
}

