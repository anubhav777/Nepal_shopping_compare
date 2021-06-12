import React from 'react';
import {Text,View,Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Couches extends React.Component{
    render(){
        return(

            <TouchableOpacity 
             onPress={this.props.onPress}
             style={{
                 marginTop:30,
                
                 height:250,
                 width:200,
                 elevation:2,
                 borderRadius:10,
                 padding:15,
                 marginRight:30,
                 marginLeft:2,
                 marginBottom:5,
                 backgroundColor: this.props.mode ? '#243140' : '#FFF',
                 
             }}
            >
                <Image
                source={this.props.src}
                style={{
                    width:170,
                    height:110,
                    borderRadius:10
                }}
                />
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginVertical:10
                }}>
                    <Text style={{
                        fontFamily:"Bold",
                        color: this.props.mode ? '#7f92a4' : "#4f4a4a",
                        opacity: this.props.mode ? 0.9 : 1,
                        fontSize:12
                    }}>
                        {this.props.name}
                 </Text>
                 <View style={{
                     height:4,
                     width:4,
                     borderRadius:4,
                     backgroundColor:"red",
                     marginHorizontal:4
                 }}>

                 </View>
                 <Text style={{
                     color:"red",
                     fontSize:9,
                     fontFamily:"Bold"
                 }}>
                     New
                 </Text>
               
                </View>
                <Text style={{
                     fontSize:9,
                     color: this.props.mode ? '#7f92a4' : "#4f4a4a",
                        opacity: this.props.mode ? 0.6 : 1,
                     fontFamily:"Regular"
                 }}>
                    {this.props.description}
                 </Text>


                 <View style={{
                     flexDirection:"row",
                     marginTop:5,
                     alignItems:"center",
                     width:"100%"
                 }}>
                     <View style={{
                         width:"80%"
                     }}>
                         <Text style={{
                             fontSize:15,
                             fontFamily:"Bold",
                             color: this.props.mode ? '#7f92a4' : "black",
            
                         }}>{this.props.price}</Text>
                     </View>
                     <View style={{
                         width:"20%"
                     }}>
                         <Image
                          source={require('../images/add.png')}
                          style={{
                              alignSelf:"flex-end",
                              width:25,
                              height:25
                          }}
                         />
                     </View>
                 </View>
                
            </TouchableOpacity>
        );
    }
}