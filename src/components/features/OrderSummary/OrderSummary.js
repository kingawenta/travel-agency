import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../features/Order/OrderSummary.scss';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';


const OrderSummary = props => {
  <h2 className={styles.component}>
    Total:<strong>{formatPrice(calculateTotal(props.cost, props.options))}</strong>
  </h2>;
};

OrderSummary.propTypes = {
  cost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;
