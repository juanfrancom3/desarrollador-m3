import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setColorFilters, setPriceRange, setSizeFilters } from '../../reducers/ui/uiSlice';
import { filtersByCategory, filtersByPrice, filtersBySize } from '../../consts';
import { priceRange } from '../../types';
import { FiltersContainer } from './styles';

export const Filters = () => {

    const { colorFilter, sizeFilter, priceRange, isLightMode } = useSelector((state: RootState) => state.ui);
    const dispatch = useDispatch();

    const handleAddFilter = (arrayName: any, value: string, reducerName: any) => {
        if (arrayName.find((x: string) => x === value)) {
            const newArray = arrayName.filter((el: string) => el !== value);
            dispatch(reducerName(newArray));
        } else {
            dispatch(reducerName([...arrayName, value]));
        }
    }

    return (
        <FiltersContainer isLightMode={isLightMode}>
            <h3>COLORES</h3>
            {
                filtersByCategory.map(filter => (
                    <label key={filter.id} className="container">{filter.name}
                        <input aria-labelledby={filter.id} checked={colorFilter.includes(filter.value)} type="checkbox" value={filter.value}
                            onChange={({ target }) => handleAddFilter(colorFilter, target.value, setColorFilters)}
                        />
                        <span className="checkmark"></span>
                    </label>
                ))
            }
            <hr />
            <h3>TALLA</h3>
            <div className="containerSizeItems">
                {
                    filtersBySize.map(filter => (
                        <span className={`sizeItem ${sizeFilter.includes(filter.value) ? 'active': ''} `} onClick={() => handleAddFilter(sizeFilter, filter.value, setSizeFilters)}
                            key={filter.id}
                        // checked={sizeFilter.includes(filter.value)}
                        >
                            {filter.name}
                        </span>
                    ))
                }
            </div>
            <hr />
            <h3>PRECIOS</h3>
            {
                filtersByPrice.map(filter => (
                    <label key={filter.id} className="container">{filter.name}
                        <input aria-labelledby={filter.id} checked={priceRange.includes(filter.value as priceRange)} type="checkbox" value={filter.value}
                            onChange={({ target }) => handleAddFilter(priceRange, target.value, setPriceRange)}
                        />
                        <span className="checkmark"></span>
                    </label>
                ))
            }
        </FiltersContainer>
    )
}
