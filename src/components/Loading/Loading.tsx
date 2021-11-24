import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { LoadingContainer } from './styles'

export const Loading = () => {
    return (
        <LoadingContainer>
            <h1><AiOutlineLoading3Quarters className="spinner" size="3rem"></AiOutlineLoading3Quarters> Cargando...</h1>
        </LoadingContainer>
    )
}
