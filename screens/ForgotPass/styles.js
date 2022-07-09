import {StyleSheet,Dimensions} from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    main: {
        height:height/10*8 ,
        alignItems:'center',
        marginTop: '10%',
    },
    formInput:{
        marginBottom: 30
    },
    textRegister:{
        fontSize: 26,
        marginBottom: 30,
        color: 'orange',
    },

    forgotPass:{
        width:width,
        alignItems:'flex-end',
        marginRight: 40,
    },
    footterSubmit:{
        flexDirection: 'row',
        height:height/13 ,
        backgroundColor:'orange',
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal: 20,
        padding: 10,
        borderRadius: 5
    },
    textFootterSubmit:{
        marginLeft: 10,
        fontSize: 18,
        color:'white'
    },
    icon:{
        color:'white'
    },
    signUp:{
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    }
    
})
export default styles