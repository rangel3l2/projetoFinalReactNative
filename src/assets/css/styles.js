import { Button, StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {

        backgroundColor: '#4de8d9',
        flex: 1,
        justifyContent: "space-around",
        
    },
    
    buttonSocialMedia: { 

        alignSelf:"center",
        minHeight:150,
        height: '20%',
        justifyContent:"space-around",
        backgroundColor:'#4de8d9',    
        alignContent:"center",        
        flexDirection:'column',
        width:'50%',
        paddingTop:'6%',
  
    },
    socialBtn:{
        margin:'2%',
    },
  
    textInputView:{

        
        width:'100%',         
        justifyContent:'center',
        height:'auto',      
        backgroundColor:'#fffff',  
        flexDirection:'column',        
        alignItems:"center"
        
        

    },
    input:{
        backgroundColor:  '#e8faf8',      
        marginHorizontal:'auto',
        width:'100%',        
        height: 40,
        margin: 12,       
        padding: 10,
        borderColor: '#61605e',
        borderRadius:5,
         
       
        
        
    },
    text:{
        textAlign:'center',
        fontWeight: '500',
        fontSize:17,
    },
    viewEnviarCounteudo:{
        height:'20%',
        width:'100%',    
        alignContent:'center',
        alignItems:'center', 
        justifyContent:"space-around",       
        
    
    },
    Button:{
        backgroundColor:  '#e8faf8', 
        padding: '3%',
        borderRadius: 5,
    }




})
export default styles;