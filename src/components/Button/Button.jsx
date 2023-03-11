import { Button } from './Button.styled';
import PropTypes from 'prop-types';

export default function ButtonLoadMore(props) {
  return (
    <Button type="button" onClick={props.funcLoadMore}>
      Load more
    </Button>
  );
}

ButtonLoadMore.propTypes = {
  funcLoadMore: PropTypes.func.isRequired,
};
