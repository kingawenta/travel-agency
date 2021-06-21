import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Order/OrderOption.scss';

const OrderOptionText = ({currentValue, setOptionValue, name}) => (
  <div className={styles.text}>
    <input
      type="text"
      className={styles.input}
      placeholder={'Enter data'}
      value={currentValue}
      name={name}
      onChange={event => setOptionValue(event.currentTarget.value)} />
  </div>
);

OrderOptionText.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
  name: PropTypes.string,
};

export default OrderOptionText;
