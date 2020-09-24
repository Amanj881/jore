import React from 'react';

function Logo(props) {
  return (
    <div>
      <svg
        width={196}
        height={40}
        viewBox="0 0 196 40"
        fill={props.fill}
        xmlns="http://www.w3.org/2000/svg"
        className={props.className}
      >
        <g clipPath="url(#clip0)">
          <path
            d="M16.295 34.6667H12.8333L8.22 21L3.55333 34.6667H1.82167L7.35833 18.455L8.23167 15.9017H9.96333L16.295 34.6667ZM1.23 36.4H2.96333L1.73333 40H0L1.23 36.4ZM15.395 0H13.6667L11.9283 5.075L9.10333 13.3483L8.82333 14.1667H10.555L12.795 7.61167L23.6917 40H28.8917L15.395 0Z"
            fill={props.fill}
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="195.185" height={40} fill={props.fill} />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
export default Logo;
