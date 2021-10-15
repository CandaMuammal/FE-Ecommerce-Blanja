// import "./App.css";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Cards from '../../../components/base/card/index'
import Navbar from '../../../components/base/module/navbar'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProduct as listProduct } from '../../../configs/redux/actions/productAction'
import style from './search.module.css'

function App() {

    const dispatch = useDispatch()

    const {products, loading, error} = useSelector(state => state.product)
    // const { product, loading, error } = getProduct

    useEffect(() => {
        dispatch(listProduct())
    }, [dispatch])

    console.log(products)

    // const [items, setItems] = useState();


    // setItems(products)

    // console.log(items)

    const [search, setSearch] = useState('')

    const [pageNumber, setPageNumber] = useState(0);

    const productsPerPage = 5;
    const pagesVisited = pageNumber * productsPerPage;

    const filteredProduct = products.filter((i) => {
        return i.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })


    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState('createdAt');
    useEffect(() => {
        const sortArray = type => {
            const types = {
                price: 'price',
                createdAt: 'createdAt',
            };
            const sortProperty = types[type];
            const sorted = [...filteredProduct].sort((a, b) => b[sortProperty] - a[sortProperty]);
            setData(sorted);
        };
        sortArray(sortType);
    }, [sortType, filteredProduct]);

    const displayProducts = data
        .slice(pagesVisited, pagesVisited + productsPerPage)
        .map((item) => {
            return (
                <Cards
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                />
            );
        });

    const pageCount = Math.ceil(products.length / productsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const handleSearch = (e) => {
        
        setSearch(e.target.value)
    }
    
    return (
        <>

            <Navbar/>
        <div className={style.body}>

            <div className={style.container}>

            <h1>You're looking for: {search}</h1>
            <div className={style.sort}>
            <input className={style.search} type="text" name="search" placeholder="Search" onChange={handleSearch} />
            <select name="" id="" onChange={(e) => setSortType(e.target.value)}>
                <option value="">-</option>
                <option value="price">Price</option>
                <option value="createdAt">Date</option>
            </select>
            </div>
            <div className={style.cardwrap}>
            {displayProducts}
            </div>

            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={style.paginationbttns}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={style.paginationDisabled}
                activeClassName={style.paginationActive}
            />
            </div>
        </div>
        </>
    );
}

export default App;