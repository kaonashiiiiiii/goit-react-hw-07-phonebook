import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useHttp } from "hooks/http.hook";

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: ''
}

const _apiURL = 'https://653f85189e8bd3be29e0bc46.mockapi.io/contacts/contacts'
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    const { request } = useHttp()
    return await request(_apiURL)
  }
)

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact) => {
    const { request } = useHttp()
    return await request(_apiURL, 'POST', JSON.stringify(contact), {'Content-Type': 'application/json'})
  }
)

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId) => {
    const { request } = useHttp()
    return await request(`${_apiURL}/${contactId}`, 'DELETE', null, {'Content-Type': 'application/json'})
  }
)

const heroesSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.contacts.isLoading = true
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false
        state.contacts.items = action.payload
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.isLoading = false
        state.contacts.error = action.error
      })
      .addCase(addContact.pending, (state) => {
        state.contacts.isLoading = true
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false
        state.contacts.items = [...state.contacts.items, action.payload]
      })
      .addCase(addContact.rejected, (state, action) => {
        state.contacts.isLoading = false
        state.contacts.error = action.error
      })
      .addCase(deleteContact.pending, (state) => {
        state.contacts.isLoading = true
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false
        state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload.id)
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.contacts.isLoading = false
        state.contacts.error = action.error
      })
  }
})

const { actions, reducer } = heroesSlice

export const {
  setFilter
} = actions

export default reducer
