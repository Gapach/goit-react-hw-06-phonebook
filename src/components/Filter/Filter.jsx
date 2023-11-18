import css from './Filter.module.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { filter } from 'redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(getFilter);

  return (
    <div className={css.filter}>
      <label>
        Filter:
        <input
          className={css.filterInput}
          type="name"
          value={currentFilter}
          onChange={e => dispatch(filter(e.currentTarget.value.trim()))}
        />
      </label>
    </div>
  );
};


export default Filter;
