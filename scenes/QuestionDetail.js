import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';
import { 
    Header, 
    Title, 
    Container, 
    Content, 
    Left, 
    Body, 
    Right, 
    List, 
    ListItem, 
    Text, 
    Icon, 
    Button,
    Card,
    CardItem,
    Thumbnail
 } from 'native-base'; 
import { Actions } from 'react-native-router-flux';
export default class QuestionDetail extends Component {
    renderHeader(){
      const{title} = this.props
      return(
          <Header>
            <Left>
                <Button transparent onPress={()=> Actions.pop()}>
                    <Icon name="arrow-back" style={{color: "#FFF"}} />
                </Button>
            </Left>
            <Body>
                <Title>
                    {title}
                </Title>
            </Body>
            <Right/>
          </Header>
      )
    }  

    render() {
        const {title, author} = this.props.question;
        return (
            <Container>
                {this.renderHeader()}
                <Content>
                    <Card>
                        <CardItem bordered>
                            <Left>
                                <Icon name="help-circle" />
                                <Body>
                                    <Text>{title}</Text>
                                    <Text note>{author}, on April 15, 2017</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>
                                    Lorem ipsum dolor sit amet amet jabang baye
                                </Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Icon active name="arrow-up" />
                                </Button>
                                <Text>
                                    4
                                </Text>
                                <Button transparent>
                                    <Icon active name="arrow-down" />
                                </Button>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}