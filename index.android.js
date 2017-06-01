/*
React-Native-Masonry Demo
https://github.com/brh55/react-native-masonry
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableHighlight
} from 'react-native';
import Masonry from 'react-native-masonry';
import api from './utilities/api'
var imgPath = 'http://eventurer.co/backend/images/venue/' + 'eventImage';
var i = Math.floor(Math.random() * 127) + 0;

const data = [
  {
    uri: String(imgPath)
  },
  {
    uri: 'https://s-media-cache-ak0.pinimg.com/736x/b1/21/df/b121df29b41b771d6610dba71834e512.jpg'
  },
  {
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQpD8mz-2Wwix8hHbGgR-mCFQVFTF7TF7hU05BxwLVO1PS5j-rZA'
  },
  {
    uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-12/30/16/enhanced/webdr04/enhanced-15965-1451509932-6.jpg'
  }
];
  
export default class example extends Component {
  constructor() {
    super();
    this.state = {
      columns: 2,
      //eventImage: ''
    };
  }
  
  componentWillMount(){
    api.getEvent().then((res) => {
      this.setState({
        event: res.event,
        eventImage: res.event[i].image_1
      })
    });
  }
  
  render() {
    return (

    <ScrollView>
     <View style={styles.center}>
            <Text style={{ fontWeight: '800', fontSize: 20 }}>Masonry Demo</Text>
           </View>
      <View style={[styles.center, { marginTop: 10, marginBottom: 25 }]}>
       
       <TouchableHighlight style={styles.button} onPress={() => this.setState({ columns: 1 })}>
           <Text>1 Column</Text>
       </TouchableHighlight>

       <TouchableHighlight style={styles.button} onPress={() => this.setState({ columns: 2 })}>
           <Text>2 Column</Text>
       </TouchableHighlight>
       
       <TouchableHighlight style={styles.button} onPress={() => this.setState({ columns: 3 })}>
           <Text>3 Columns</Text>
       </TouchableHighlight>
        
           </View>
     <View style={{height: '100%'}}>
       <Masonry
                bricks={data}
                columns={this.state.columns}/>

     </View>
  </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1
  },
  button: {
    backgroundColor: '#dbdcdb',
    padding: 10,
    marginRight: 4,
    borderRadius: 4,
    borderBottomColor: '#7b7b7b',
    borderBottomWidth: 5
  },
  buttonText: {
    color: '#404040'
  },
  center: {
    marginTop: 30,
    marginBottom: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

AppRegistry.registerComponent('example', () => example);
