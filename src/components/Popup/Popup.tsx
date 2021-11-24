import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Filters } from '../Filters/Filters';
import { setColorFilters, setIsModalOpen, setPriceRange } from '../../reducers/ui/uiSlice';
import { AiOutlineClose } from 'react-icons/ai';
import { ContainerPopup } from './styles';
import { RootState } from '../../store/store';

export const Popup = () => {
    const dispatch = useDispatch();
    const { isLightMode } = useSelector((state: RootState) => state.ui)

    const closePopup = () => {
        dispatch(setIsModalOpen(false));
        (document.getElementById('filterPopup') as any).style.display = 'none';
    }

    const handleResetFilters = () => {
        dispatch(setColorFilters([]));
        dispatch(setPriceRange([]));
    }


    return (
        <ContainerPopup isLightMode={isLightMode} id="filterPopup">
            <div className="popup">
                <div className="close" onClick={() => closePopup()}><AiOutlineClose /></div>
                <Filters />
                <div className="buttons">
                    <div className="save">
                        <button type="button" onClick={() => closePopup()}>APLICAR</button>
                    </div>
                    <div className="clear">
                        <button type="button" onClick={() => handleResetFilters()}>LIMPIAR</button>
                    </div>
                </div>
            </div>
        </ContainerPopup>
    )
}
