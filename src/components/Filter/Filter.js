import PropTypes from 'prop-types';
import { FormLabelText } from 'components/Components.styled';
function Filter({ value, onChange }) {
  return (
    <label>
      <FormLabelText>Find contacts by name</FormLabelText>

      <input type="text" name="filter" value={value} onChange={onChange} />
    </label>
  );
}
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
