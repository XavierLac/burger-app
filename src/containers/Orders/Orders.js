import React from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends React.Component {
  state = {
    orders: [],
    loading: true
  };
  componentDidMount() {
    axios
      .get('/orders.json')
      .then(response => {
        // On crée un nouvel objet avec le contenu de response.data et on y ajoute un ID qui correspond à la clé générée par Firebase
        const fetchedOrders = [];
        for (let key in response.data) {
          fetchedOrders.push({
            ...response.data[key],
            id: key
          });
        }
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <div>
        <Order />
        <Order />
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
