import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataApi } from '../redux/covid/covid';
import Countries from './Countries';

const Home = () => {
  const [search, setSearch] = useState('');
  const _ = useSelector((state) => state.covidData.datesData);
  const totalData = useSelector((state) => state.covidData.totalData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataApi());
  }, [dispatch]);

  const filteredData = Object.entries(_).filter((item) => Object.keys(item).some((key) => item[key]
    .toString()
    .toLowerCase()
    .includes(search.toLocaleLowerCase())));

  return (
    <>
      <div className="row m-0 p-0 ">
        <div className="col m-0 p-3  d-flex flex-column align-items-center justify-content-center bg-image">
          <p className="text-white text-center">
            <span className="h5 text-center">COVID-19 Statistics</span>
            <br />
            Around The World
          </p>
        </div>
        <div className="col bg-color m-0 p-3 ">
          <p className="text-white">
            <span className="h5">Total Cases:</span>
            <br />
            {totalData.today_confirmed}
          </p>
          <p className="text-white">
            <span className="h5">Date:</span>
            <br />
            {totalData.date}
          </p>
        </div>
      </div>
      <div className="text-center bg-color1 m-0 pt-2 pb-3">
        <p className="text-white m-0 p-0">Search by country name</p>
        <input
          type="text"
          placeholder="Type a country"
          className="mx-0 mt-2 mb-0 ps-3 py-1 rounded-pill"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="m-0 countries-container bg-color row">
        {filteredData.map((data) => (
          <Countries key={data[0]} data={data[1]} />
        ))}
      </div>
    </>
  );
};

export default Home;
