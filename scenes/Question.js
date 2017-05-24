import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ListView
} from 'react-native';
import { Header, Title, Container, Content, Left, Body, Right, List, ListItem, Text, Icon } from 'native-base'; 
import { Actions } from 'react-native-router-flux';

export default class Question extends Component {
  constructor(){
      super();
      const ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
      this.question = [
          {title:"First Question", author: "fery"},
          {title:"Second Question", author: "fera"},
          {title:"Third Question", author: "feru"},
      ];
      this.state = {
          dataSource: ds.cloneWithRows(this.question),
      };
  }
  renderHeader(){
      const{title} = this.props
      return(
          <Header>
            <Body>
                <Title>
                    {title}
                </Title>
            </Body>
          </Header>
      )
  }  
  renderRow(rowData){
      return (
        <ListItem onPress={()=> {Actions.QuestionDetail({question: rowData})}} >
            <Body>
                <Text>{rowData.author}</Text>
                <Text note>{rowData.title}</Text>
            </Body>
            <Right>
                <Icon name="arrow-forward" style={{color: "#0098ff"}} />
            </Right>
        </ListItem>
      );
  }
  render() {
    return (
    <Container>
        {this.renderHeader()}
        <Content>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
            />
        </Content>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  row: {
      flex: 1,
      justifyContent: "center",
      padding: 20,
      marginBottom: 10,
      backgroundColor: '#FFF',
      flexDirection: 'row'
  },
  titleRow: {
      flex: 4
  },
  authorRow: {
      flex: 1
  }
});
