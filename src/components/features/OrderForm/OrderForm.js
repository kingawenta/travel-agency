import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
//import styles from '../../features/Order/OrderForm.scss';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';


const OrderForm = ({tripCost, options, setOrderOption}) => (
  <Row>
    {pricing.map((option) =>(
      <Col md={4} key={option.id}>
        <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption}/>
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary cost={tripCost} options={options}/>
    </Col>
  </Row>
);

OrderForm.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.string,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
