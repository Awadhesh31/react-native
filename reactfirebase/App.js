import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';

const styles = require('./app/style');

import Toolbar from './app/components/Toolbar/Toolbar';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDhDKbRMFwzk9Btx3P8zIq2k6J6TCgfaIQ",
    authDomain: "tech-9ce04.firebaseapp.com",
    databaseURL: "https://tech-9ce04.firebaseio.com",
    projectId: "tech-9ce04",
    storageBucket: "tech-9ce04.appspot.com",
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class App extends Component<{}> {

   constructor(){
       super();
       let ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
       this.state = {
           itemDataSource: ds
       }
       this.itemsRef = this.getRef().child('bloger');
       this.renderRow = this.renderRow.bind(this);
       this.pressRow = this.pressRow.bind(this);
   }

   getRef(){
       return firebaseApp.database().ref();
   }

   componentWillMount(){
       this.getItems(this.itemsRef);
   }

    componentDidMount(){
        this.getItems(this.itemsRef);
    }

   getItems(itemsRef){
      /*let items = [
          {title:'Awadhesh', date:'12, jun 2017'},
          {title:'Ankit', date:'12, jun 2017'},
          {title:'Arpit', date:'12, jun 2017'},
          {title:'Adreesh', date:'12, jun 2017'}
      ];*/

      itemsRef.on('value',(snap) => {
         let items = [];
         snap.forEach((child) => {
            items.push({
                title: child.val().title,
                date: child.val().date,
                _key: child.key
            });
         });
          this.setState({
              itemDataSource: this.state.itemDataSource.cloneWithRows(items)
          });
      });
  }

  pressRow(item){
       console.log(item);
  }

  renderRow(item){
      return(
          <TouchableHighlight onPress={() => {
              this.pressRow(item);
          }}>
              <View style={styles.li}>
                  <Text style={styles.liText}>{item.title}</Text>
                  <Text style={styles.liSubText}>{item.date}</Text>
              </View>
          </TouchableHighlight>
      );
  }

  render() {
    return (
      <View style={styles.container}>
        <Toolbar title="Tech Brain" />
          <ListView
            dataSource={this.state.itemDataSource}
            renderRow={this.renderRow}
          />
      </View>
    );
  }
}


