import React from 'react'
import BackToTop from "react-back-to-top-button";
import './backToTop.scss'

export default function BackToTopCom() {
    return (
        <BackToTop
        className="back-to-top"
        showOnScrollUp
        showAt={100}
        speed={1500}
        easing="easeInOutQuint"
        >
            <i class="fa fa-angle-double-up"></i>
        </BackToTop>
    )
}
