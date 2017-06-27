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

    var drugs = [
      {
        createdAt: '2017-06-01',
        drugConcentration: 150.0,
        drugConcentrationUnit: 'mg/capsule',
        minHoursBetweenDoses: 12.0,
        id: 1,
        materialForm: 'Capsule',
        name: 'Orfiril Long',
      },
      {
        createdAt: '2017-06-01',
        drugConcentration: 40.0,
        drugConcentrationUnit: 'mg/ml',
        minHoursBetweenDoses: 6.0,
        id: 2,
        materialForm: 'Oral solution',
        name: 'Burana',
      },
      {
        createdAt: '2017-06-01',
        drugConcentration: 24.0,
        drugConcentrationUnit: 'mg/ml',
        minHoursBetweenDoses: 6.0,
        id: 3,
        materialForm: 'Oral solution',
        name: 'Panadol',
      },
    ]

    var sortedDrugs = drugs.sort((a, b) => {
      return a['name'].localeCompare(b['name'])
    })

    this.state={
      drugAlphabetizedList: sortedDrugs,
    }
  }

  _handlePress = (drug) => {
    this.props.navigator.push('drug', {drug: drug});
  }

  componentWillMount() {

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
          {
            this.state.drugAlphabetizedList.map((drug, i) => (
              <ListItem key={i} onPress={() => this._handlePress(drug)}>
                <Body>
                  <Text style={styles.drugBoxHeaderText}>{drug.name}</Text>
                  <Text style={styles.drugBoxInfoText}>{drug.drugConcentration} {drug.drugConcentrationUnit}, {drug.materialForm}</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            ))
          }
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
