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
  Icon,
  Title,
  H1,
  H2,
  H3
} from 'native-base';


export default class DrugDetails extends React.Component {

  componentDidMount() {
    console.log("did mount: ", this.props);
  }

  render() {
    console.log("render: ", this.props);
    console.log("renderDrug: ", this.props.detailDrug);
    return (
      <Container>
       <Header>
         <Left>
         </Left>
         <Body>
           <Title>Drugs</Title>
         </Body>
         <Right>
           <Button transparent>
             <Icon name='add' />
           </Button>
         </Right>
       </Header>
        <Content>
          <H1>{this.props.detailDrug}</H1>
          <Text>Default</Text>
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
});