import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  H1,
  H2,
  H3,
  Card,
  CardItem,
  Icon,
} from 'native-base';

import { MaterialIcons } from '@expo/vector-icons';



export default class DrugDetails extends React.Component {

  _goBack = () => {
    this.props.navigator.pop();
  }

  componentDidMount() {
    console.log("did mount: ", this.props);
  }

  render() {
    console.log("render: ", this.props);
    return (
      <Container>
       <Header>
         <Left>
           <Button transparent onPress={() => (this._goBack())}>
             <MaterialIcons name="arrow-back" size={23} color="#08c" />
           </Button>
         </Left>
         <Body>
           <Title>Drugs</Title>
         </Body>
         <Right>
           <Button transparent>
              <MaterialIcons name="edit" size={23} color="#08c" />
           </Button>
         </Right>
       </Header>
        <Content>

          <Card>
            <CardItem header>
              <Text>{this.props.drug.name}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Left></Left>
              <Button transparent primary iconLeft>
                <Icon name='add' />
                <Text>
                  Add Treatment
                </Text>
              </Button>
              <Right></Right>
            </CardItem>
         </Card>

        </Content>
     </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  drugBox: {
    width: '98%',
    marginLeft: '1%',
    marginRight: '1%',
    marginBottom: 2,
    borderRadius: 2,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  drugListSeparator: {
    fontWeight: 'bold',
  },
  drugBoxHeaderText: {
    fontSize: 14,
  },
  drugBoxInfoText: {
    color: '#999',
    fontSize: 12,
  },
  drugBoxInfoContainer: {
    flex: 0.8
  },
  drugBoxIconContainer: {
    flex: 0.2,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  cardFooter: {
    alignItems: 'center',
  },
});
