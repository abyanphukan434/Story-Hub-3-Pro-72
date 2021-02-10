import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import ReadStoryScr from './screens/ReadStoryScr';
import WriteStoryScr from './screens/WriteStoryScr';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';

export default class App extends React.Component{
   render(){
    return (
      <AppContainer/>
   );
  }
}

const TabNavigator = createBottomTabNavigator({
  ReadStory:{screen:ReadStoryScreen},
  WriteStory:{screen:WriteStoryScreen},
},

{defaultNavigationOptions: ({navigation})=>({
  tabBarIcon: ()=>{
    const routeName = navigation.state.routeName;
    console.log(routeName)
    if(routeName === "ReadStory"){
      return(
        <Image
        source={require("./assets/read.png")}
        style={{width:35, height:35}}
       />
      )
    }
    else if(routeName === "WriteStory"){
      return(
        <Image
        source={require("./assets/write.png")}
        style={{width:35, height:35}}/>
          )
        }
      }
    })
  }
);

const AppContainer = createAppContainer(TabNavigator);