import { createSlice, createAction } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  status: 'idle',
};

export const fetchAsyncFulfilled = createAction('cart/fetchItems/fulfilled')
export const addAsyncFulfilled = createAction('cart/addItems/fulfilled')
export const updateAsyncFulfilled = createAction('cart/updateItems/fulfilled')
export const deleteAsyncFulfilled = createAction('cart/deleteItems/fulfilled')

export const fetchAsync = createAction('cart/fetchItems/pending')
export const addAsync = createAction('cart/addItems/pending');
export const updateAsync = createAction('cart/updateItems/pending');
export const deleteAsync = createAction('cart/deleteItems/pending')

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncFulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;
      })
      .addCase(addAsyncFulfilled, (state, action) => {
        state.status = 'idle';
        state.items.push(action.payload);
      })
      .addCase(updateAsyncFulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.items.findIndex(item => item.id === action.payload.id)
        state.items.splice(index, 1, action.payload);
      })
      .addCase(deleteAsyncFulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.items.findIndex(item => item.id === action.payload)
        state.items.splice(index, 1);
      });
  },
});

export default cartSlice.reducer;
