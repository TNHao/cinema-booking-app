import React from 'react'
import './Loading.scss'
import { useSelector } from 'react-redux'

export default function Loading() {

    const  { isLoading } = useSelector(state => state.LoadingReducer)

    return (
        <>
            { isLoading ? <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '99' }}>
                <div className="loading">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div> : ''}
        </>
    )
}
