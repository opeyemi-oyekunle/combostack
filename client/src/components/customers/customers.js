import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
  constructor(){
    super();
    this.state = {
        customers: []
    }
  }
    componentDidMount(){
      fetch('/api/customers')
      .then(res => res.json())
      .then(customers=>this.setState({customers}, ()=>console.log('Customer fetched...', customers)))
    }

  render() {
    const customer = this.state.customers.map(customer=>{
      return <li key={customer.id}>{customer.lastName}  {customer.firstName}</li>
    })
    return (
      <div>
        <h2> Customers </h2>
        <ul>
          {customer}
        </ul>
      </div>
    );
  }
}

export default Customers;
