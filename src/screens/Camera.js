import React, { Component } from 'react';
import {StatusBar} from 'expo-status-bar'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {Camera} from 'expo-camera'
import CameraPreview from './CameraPreview ';
class Camerapage extends Component {
    state={
        startCamera:false,
        capturedImage:null,
        previewVisible:false,
        flashMode:'off',
        cameraType:Camera.Constants.Type.back
    }
    render() {
        let camera: Camera
        const __startCamera = async () => {
            const {status} = await Camera.requestPermissionsAsync()
         if(status === 'granted'){
            this.setState({startCamera:true})
        
         }else{
           Alert.alert("Access denied")
         }
        }
        const __takePicture = async () => {
            if (!camera) return
            const photo = await camera.takePictureAsync()
            console.log(photo)
            this.setState({previewVisible:true,capturedImage:photo})
            
                
          }
          const __retakePicture = () => {
            this.setState({previewVisible:false,capturedImage:null})
            __startCamera()
          }
          const __handleFlashMode = () => {
            if (this.state.flashMode === 'on') {
                this.setState({flashMode:'off'})
              
            } else if (this.state.flashMode === 'off') {
                this.setState({flashMode:'on'})
            } else {
                this.setState({flashMode:'auto'})
            }
        
          }
          const __switchCamera = () => {
            if (this.state.cameraType === 'back') {
                this.setState({cameraType:'front'})
            } else {
                this.setState({cameraType:'back'})
            }
          }
          const __savePhoto = () => {}

        return (
            <View style={styles.container}>
                {this.state.startCamera ?  <View
          style={{
            flex: 1,
            width: '100%'
          }}
        >
            {this.state.previewVisible && this.state.capturedImage ?<CameraPreview photo={this.state.capturedImage} savePhoto={__savePhoto}  retakePicture={__retakePicture}/>:
            <Camera
            type={this.state.cameraType}
            flashMode={this.state.flashMode}
            style={styles.cam}
            ref={(r) => {
            camera = r
            }}
            >
                 <View
                style={{
                  flex: 1,
                  width: '100%',
                  backgroundColor: 'transparent',
                  flexDirection: 'row'
                }}
              >
                <View
                  style={{
                    position: 'absolute',
                    left: '5%',
                    top: '10%',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
            
            <TouchableOpacity
                    onPress={__handleFlashMode}
                    style={{
                      backgroundColor: this.state.flashMode === 'off' ? '#000' : '#fff',
                      borderRadius: 50,
                      height: 25,
                      width: 25
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20
                      }}
                    >
                      ⚡️
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                            onPress={__switchCamera}
                            style={{
                            marginTop: 20,
                            borderRadius: 50,
                            height: 25,
                            width: 25
                            }}
                        >
                            <Text
                                style={{
                                fontSize: 20
                                }}
                                >
                            {this.state.cameraType === 'front' ? '🤳' : '📷'}
                            </Text>
                        </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                flexDirection: 'row',
                                flex: 1,
                                width: '100%',
                                padding: 20,
                                justifyContent: 'space-between'
                            }}
                            >
                            <View
                                style={{
                                alignSelf: 'center',
                                flex: 1,
                                alignItems: 'center'
                                }}
                            >
                        <TouchableOpacity
                        onPress={__takePicture}
                        style={{
                        width: 70,
                        height: 70,
                        bottom: 0,
                        borderRadius: 50,
                        backgroundColor: '#fff'
                        }}
                        />
                        </View>
            </View>
            </View>

            </Camera> 
    }
            </View>
            : 
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <TouchableOpacity
          style={{
            width: 130,
            borderRadius: 4,
            backgroundColor: '#14274e',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: 40
          }}
          onPress={__startCamera}
        >
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              textAlign: 'center'
            }}
          >
            Take picture
          </Text>
        </TouchableOpacity>
        
      </View>
        }
      <StatusBar style="auto" />
    </View>
        
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    cam:{
        flex: 1,width:"100%"
    }
  })
export default Camerapage;