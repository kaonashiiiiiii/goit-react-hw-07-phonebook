import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFilter } from 'store/selectors/contactSelectors'
import { setFilter } from 'store/slices/contactsSlice'

const FilterForm = () => {
  const filter = useSelector(getFilter)
  const dispatch = useDispatch()

  function onChange (e) {
    dispatch(setFilter(e.target.value))
  }
  return (
    <form>
      <label htmlFor="filter">Find contacts by name</label>
      <input value={filter} name="filter" onChange={onChange}/>
    </form>
  )
}

export default FilterForm