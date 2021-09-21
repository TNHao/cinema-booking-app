import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { useSelector, useDispatch } from 'react-redux';
import { actGetListMoviePagination } from 'redux/actions/QuanLyPhimActions';
import CardMovie from 'components/CardMovie/CardMovie.';
import './HomeMovie.scss'
import Pagination from 'components/Pagination/Pagination';



const settings = {
    className: "center variable-width",
    centerMode: false,
    infinite: false,
    centerPadding: "0px",
    slidesToShow: 4,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
};

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", marginLeft: '-25px' }}
            onClick={onClick}
        />
    );
}

export default function HomeMovie() {


    
    // const { listMovie } = useSelector(state => state.QuanLyPhimReducer)
    const { listMoviePagination } = useSelector(state => state.QuanLyPhimReducer)
    const [state, setState] = useState(true)
    const [ pagination , setpagination ] = useState({
        page : 1,
        pageSize : 12,
        total : 61
    })
    const [ filter , setFilter ] = useState({
        page : 1,
        pageSize : 12
    })

    const dispatch = useDispatch()


    useEffect(() => {     
        dispatch(actGetListMoviePagination(filter.page, filter.pageSize)) 
        setpagination({
            ...pagination,
            page : filter.page,
            pageSize : filter.pageSize,
            total : listMoviePagination.totalCount
        })  
        
    }, [filter])

    const renderListMovie = () => {
        return (
            listMoviePagination.items?.filter((p) => { return p.dangChieu === state })?.map((item, index) => {
                return (
                    <div key={index}>
                        <CardMovie cardMovie={item} />
                    </div>
                )
        })
        )
    }

    function handlePageChange(newPage){
        console.log('newPage',newPage);
        setFilter({
            ...filter,
            page : newPage,         
        })
        
    }   


    return (
        <div id="movie" className="container-lg home__movie">
            <div className="text-center home__movie-button">
                <button className={`${ state === true ? 'active_Film': 'none_active-Film'} transition duration-500 ease-in-out hover:bg-black hover:text-white hover:border-white transform hover:-translate-y-1 hover:scale-110 px-8 py-3 font-semibold rounded-full mr-4`} onClick={() => {
                    setState(true)
                }}>PHIM DANG CHIEU</button>
                <button className={`${ state === false ? 'active_Film' : 'none_active-Film'} transition duration-500 ease-in-out hover:bg-black hover:text-white hover:border-white transform hover:-translate-y-1 hover:scale-110 px-8 py-3 font-semibold rounded-full`} onClick={() => {
                    setState(false)
                }} >PHIM SAP CHIEU</button>
            </div>          
            <Slider {...settings}>
                {renderListMovie()}
            </Slider>
            <Pagination 
                pagination={pagination}
                onPageChange = {handlePageChange}
            />
        </div>
    )
}
