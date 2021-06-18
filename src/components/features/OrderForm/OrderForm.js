import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
//import styles from '../../features/Order/OrderForm.scss';


const OrderForm = props => {
  <Row>
    <Col xs={12}>
      <OrderSummary cost={props.tripCost} options={props.options}/>
    </Col>
  </Row>;
};

OrderForm.propTypes = {
  cost: PropTypes.string,
  options: PropTypes.object,
  tripCost: PropTypes.string,
  tripOptions: PropTypes.object,
};

export default OrderForm;
