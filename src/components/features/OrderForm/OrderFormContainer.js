import { getOrderOptions, setOrderOption } from '../../../redux/orderRedux';
import OrderForm from './OrderForm';
import { connect } from 'react-redux';

const mapStateToProps = (state, props) => {
  const options = getOrderOptions(state, props.options);

  return {
    options,
  };
};

const mapDispatchToProps = dispatch => ({
  setOrderOption: options =>
    dispatch(setOrderOption(options)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
