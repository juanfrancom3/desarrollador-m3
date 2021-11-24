import axios from 'axios';
import { setProductsList, setTotalProducts } from '../reducers/products/productsSlice';

export const getData = (page: number, colors: string[], sizes: string[]) => (dispatch: Function) => {
    const url =`http://localhost:3001/data?${colors.length > 0 ? `color=${colors.join('&color=')}&` : ''}${sizes.length > 0 ? `size=${sizes.join('&size=')}&` : ''}_page=${page}&_limit=6`;
    axios.get(url)
        .then((response) => {
            dispatch(setProductsList(response.data));
            dispatch(setTotalProducts(Number(response.headers["x-total-count"])));
        })
        .catch((error) => console.error(error));
}