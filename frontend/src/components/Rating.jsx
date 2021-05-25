

import PropTypes from 'prop-types';

const Rating = ({ value, text, color }) => {
  return (
    <div className='rating' style={{ color: 'pink' }}>
      <span>
        <i
          className={
            value >= 1
              ? 'fas fa-cookie'
              : value >= 0.5
                ? 'fas fa-cookie-bite'
                : 'far fa-cookie'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            value >= 2
              ? 'fas fa-cookie'
              : value >= 1.5
                ? 'fas fa-cookie-bite'
                : 'far fa-cookie'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            value >= 3
              ? 'fas fa-cookie'
              : value >= 2.5
                ? 'fas fa-cookie-bite'
                : 'far fa-cookie'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            value >= 4
              ? 'fas fa-cookie'
              : value >= 3.5
                ? 'fas fa-cookie-bite'
                : 'far fa-cookie'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            value >= 5
              ? 'fas fa-cookie'
              : value >= 4.5
                ? 'fas fa-cookie-bite'
                : 'far fa-cookie'
          }
        ></i>
      </span>
      <span>{text && text}</span>
    </div>
  );
}

Rating.defaultProps = {
  color: '#f8e825',
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Rating;