import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useWindowSize } from '../../hooks/useWindowSize';
import { RootState } from '../../store/store';
import { setIsModalOpen, setSortyByFilters } from '../../reducers/ui/uiSlice';
import { Filters } from '../Filters/Filters';
import { Popup } from '../Popup/Popup';
import ProductsList from '../ProductsList/ProductsList';
import { sortOrder, sortType } from '../../types';
import { FaSortAlphaDown, FaSortAlphaDownAlt } from 'react-icons/fa';
import { BiFilter } from 'react-icons/bi';
import { ProductsContainer, ProductsContent, ProductsHeader, SortContainer } from './styles';

const Products = () => {

    const { sortBy, isLightMode } = useSelector((state: RootState) => state.ui);
    const dispatch = useDispatch();
    const windowSize = useWindowSize();

    const openForm = () => {
        dispatch(setIsModalOpen(true));
        (document.getElementById('filterPopup') as any).style.display = 'block';
    }

    const handleSort = (sortOrder: sortOrder, sortType: sortType) => {
        dispatch(setSortyByFilters([sortOrder, sortType]));
    }

    return (
        <ProductsContainer>
            <ProductsHeader isLightMode={isLightMode}>
                <h1> Productos </h1>
                {/* <BiFilter  size="2.9rem" onClick={() => openForm()}></BiFilter> */}
                <SortContainer isLightMode={isLightMode}>
                <button onClick={() => openForm()} className="filterMobile">Filtrar</button>
                    {
                        sortBy[0] === 'asc' ? <FaSortAlphaDown size="2.9rem" onClick={() => handleSort('desc', sortBy[1])} /> : <FaSortAlphaDownAlt size="2.9rem" onClick={() => handleSort('asc', sortBy[1])} />
                    }
                    <select title="select" defaultValue={''} onChange={({ target }: any) => handleSort(sortBy[0], target.value)}>
                        <option value="">Ordenar por</option>
                        <option value="createdAt">Más recientes</option>
                        <option value="name">Nombre</option>
                        <option value="price">Precio</option>
                    </select>
                </SortContainer>
            </ProductsHeader>
            <ProductsContent>
                {windowSize.width > 767 && <Filters />}
                <ProductsList />
            </ProductsContent>
            {windowSize.width < 767 && <Popup></Popup>}
        </ProductsContainer>
    )
}

export default Products;