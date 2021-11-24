import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../helpers/fetchData';
import { filterByPriceRange } from '../../helpers/filters';
import { sortItems } from '../../helpers/sortItems';
import { addPaginatedItems } from '../../reducers/products/productsSlice';
import { RootState } from '../../store/store';
import { Product } from '../../types';
import { ProductCard } from '../ProductCard/ProductCard';
import { ContainerNoItems, ContainerProducts, ContainerProductsList, Pagination } from './styles';

const ProductsList = () => {
    const dispatch = useDispatch();
    const { sortBy, colorFilter, sizeFilter, priceRange, isLightMode } = useSelector((state: RootState) => state.ui);
    const { products, paginatedItems, totalProducts } = useSelector((state: RootState) => state.products);
    const [pageCount, setPageCount] = useState(0);
    const [actualPage, setActualPage] = useState(0);

    useEffect(() => {
        dispatch(getData(1, colorFilter, sizeFilter));
    }, [colorFilter, dispatch, sizeFilter]);

    useEffect(() => {
        if (products && products.length > 0) {
            const itemsPerPage = 6;
            let newArray = [...products];
            newArray = sortItems(newArray, sortBy);
            if (priceRange.length > 0) {
                newArray = filterByPriceRange(newArray, priceRange);
            }
            dispatch(addPaginatedItems(newArray));
            setPageCount(Math.ceil(totalProducts / itemsPerPage));
        }
    }, [dispatch, products, sortBy, totalProducts, priceRange]);

    const handlePageClick = (selected: number) => {
        dispatch(getData(selected + 1, colorFilter, sizeFilter));
        setActualPage(selected);
        window.scrollTo(0, 0);
    };

    return (
        <ContainerProductsList>
            {
                paginatedItems.length > 0
                &&
                <>
                    <ContainerProducts>
                        {
                            paginatedItems.map((item: Product) => (
                                <ProductCard key={item.id} {...item} />
                            ))
                        }
                    </ContainerProducts>
                    <Pagination isLightMode={isLightMode}>
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel={((actualPage + 1) / pageCount) === 1 ? "" : ">"}
                            onPageChange={({ selected }) => handlePageClick(selected)}
                            pageRangeDisplayed={3}
                            pageCount={pageCount}
                            previousLabel={actualPage !== 0 ? "<" : ""}
                            marginPagesDisplayed={3}
                        />
                    </Pagination>
                </>
            }
            {
                paginatedItems.length === 0
                &&
                <ContainerNoItems>
                    <h1>No items found</h1>
                </ContainerNoItems>
            }
        </ ContainerProductsList>
    );
}
export default ProductsList;