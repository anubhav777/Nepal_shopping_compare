import React, { Component } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native'
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions'
import Expo from 'expo'
class CameraPreview  extends Component {
  state = {
    cameraRoll: false,
  };

  async componentDidMount() {
    await MediaLibrary.requestPermissionsAsync();
  }

  // async getCameraPermissions() {
  //   try {

  //     const { statusRoll } = await Permission.askAsync(Permission.CAMERA_ROLL);
  //     this.setState({ cameraRoll: statusRoll });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

   savepic= async ()=>{
    try {
      let saveResult = await MediaLibrary.saveToLibraryAsync(this.props.photo.uri);
      console.log(saveResult);
    } catch (e) {
      alert(e.message);
    }
    
  }
    render() {
        return (
            <View
      style={{
        backgroundColor: 'transparent',
        flex: 1,
        width: '100%',
        height: '100%'
      }}
    >
      <ImageBackground
        source={{uri: this.props.photo && this.props.photo.uri}}
        style={{
          flex: 1
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            padding: 15,
            justifyContent: 'flex-end'
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <TouchableOpacity
              onPress={this.props.retakePicture}
              style={{
                width: 130,
                height: 40,

                alignItems: 'center',
                borderRadius: 4
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20
                }}
              >
                Re-take
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.savepic}
              style={{
                width: 130,
                height: 40,

                alignItems: 'center',
                borderRadius: 4
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20
                }}
              >
                save photo
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
        );
    }
}

export default CameraPreview ;