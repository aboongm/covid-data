import React from 'react';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Countries = (props) => {
  const {
    data: { name, today_confirmed: TotalConfirmed },
  } = props;
  const navigate = useNavigate();
  return (
    <motion.div
      className=" col-6"
      initial={{ x: '-100vw' }}
      animate={{ x: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      <div className="countries">
        <button
          type="button"
          className="navigate"
          onClick={() => navigate(`/${name}`)}
        >
          {name}
        </button>
        <p className="text-white">{TotalConfirmed}</p>
        {' '}
        <FaRegArrowAltCircleRight
          className="arrow-right"
          onClick={() => navigate(`/${name}`)}
        />
      </div>
    </motion.div>
  );
};

Countries.propTypes = {
  data: PropTypes.shape({
    today_confirmed: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

export default Countries;
