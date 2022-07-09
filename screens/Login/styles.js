import {StyleSheet,Dimensions} from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    title:{
        height:height/10*2 ,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems:'center'
    },
    main: {
        height:height/10*5 ,
        alignItems:'center',
        marginTop: '10%',
    },
    logo:{
        width: 80,
        height: 80
    },
    formInput:{
        marginBottom: 30
    },
    textLogin:{
        fontSize: 26,
        marginBottom: 30,
        color: 'orange',
    },
    textMainTitle:{
        marginBottom: 10,
        fontSize: 20,
        color: 'white'
    },
    textTitle:{
        color: 'white'
    },
    setting:{
        flexDirection:'row',
        justifyContent: 'space-between',
        width: width,
    },
    buttonSwitch:{
        alignSelf:'center',
        marginLeft: -120
    }, 
    textSavePass:{
        alignSelf:'center',
        marginLeft: 20
    },
    forgotPass:{
        alignItems:'flex-end',
        marginBottom: 12,
        marginTop: 12,
        marginRight: 10
    },
    footter:{
        height:height/10*2 ,
        justifyContent:'flex-end'
    },
    footterSubmit:{
        flexDirection:'row',
        height:height/12,
        backgroundColor:'orange',
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal: 20,
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    icon:{
        color:'white',
        marginRight: 10
    },
    textFootterSubmit:{
        fontSize: 18,
        color:'white'
    },
    textSignUp:{
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    },

    
})
export default styles