import { useSelector, useDispatch } from 'react-redux';
import {
  InputFilter,
  FilterWrapper,
  ButtonFilter,
  Cross,
} from './Filter.styled';
import { getFilterValue } from 'redux/selector';
import { addFilter, resetFilter } from 'redux/filterSlice';

const Filter = () => {
  const searchValue = useSelector(getFilterValue);

  const dispatch = useDispatch();

  const handleFilterChange = ({ target: { value } }) => {
    dispatch(addFilter(value));
  };

  return (
    <FilterWrapper>
      <InputFilter
        type="text"
        name="filter"
        value={searchValue}
        onChange={handleFilterChange}
        placeholder="Search contact's name"
      />
      <ButtonFilter type="button" onClick={() => dispatch(resetFilter())}>
        <Cross></Cross>
      </ButtonFilter>
    </FilterWrapper>
  );
};

export default Filter;
