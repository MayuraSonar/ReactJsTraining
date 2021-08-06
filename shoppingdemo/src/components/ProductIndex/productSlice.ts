import { createSlice } from '@reduxjs/toolkit';
import shoes from '../../assests/shoes.json';

const initialState: Shoes = {
    men: shoes.men,
    women: shoes.women,
    kids: shoes.kids,
    shoedById: { ...shoes.men, ...shoes.women, ...shoes.kids },
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
});

export default productsSlice.reducer;