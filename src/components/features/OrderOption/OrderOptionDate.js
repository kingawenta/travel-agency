import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import PropTypes from 'prop-types';
import styles from '../Order/OrderOption.scss';

const OrderOptionDate = ({ currentValue, setOptionValue, name }) => (
  <div className={styles.component}>
    <DatePicker
      type="date"
      className={styles.input}
      selected={currentValue}
      onChange={(date) => setOptionValue(date)}
      name={name}
      placeholderText={'pick a day'}
    />
  </div>
);

OrderOptionDate.propTypes = {
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
  name: PropTypes.string,
  startDate: PropTypes.node,
  setStartDate: PropTypes.node,
};
export default OrderOptionDate;
