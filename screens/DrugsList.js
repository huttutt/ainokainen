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
  List,
  ListItem,
} from 'native-base';


export default class DrugsList extends React.Component {

  constructor(props) {
    super(props);

    this.state={
      detailDrug: "",
    }
  }

  _handlePress = () => {
    this.props.navigator.push('drug', {detailDrug: "Orfiril"});
  }

  render() {
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
       <ScrollView  style={styles.container}>

         <List>
            <ListItem itemDivider>
              <Text style={styles.drugListSeparator}>B</Text>
            </ListItem>
            <ListItem icon>
              <Body>
                <Text style={styles.drugBoxHeaderText}>Burana</Text>
                <Text style={styles.drugBoxInfoText}>Oral suspension</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem itemDivider>
              <Text style={styles.drugListSeparator}>O</Text>
            </ListItem>
            <ListItem icon onPress={() => (this._handlePress())}>
              <Body>
                <Text style={styles.drugBoxHeaderText}>Orfiril</Text>
                <Text style={styles.drugBoxInfoText}>150mg Capsule, Default dosage: 1 x 150mg</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem itemDivider>
              <Text style={styles.drugListSeparator}>P</Text>
            </ListItem>
            <ListItem icon>
              <Body>
                <Text style={styles.drugBoxHeaderText}>Panadol</Text>
                <Text style={styles.drugBoxInfoText}>Oral suspension</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>


       </ScrollView>
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
