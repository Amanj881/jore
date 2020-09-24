import React from 'react';

function TopNavbar(props) {
	const options = (props.menuOptions).map((option, index) => {
		return (
			<a href="#" className="mr-6	inline-flex items-center text-base leading-6 text-black-7">
        {option}
      </a>
		)
	})
	return (
		<div>
			<nav className="bg-white shadow">
			  <div className="max-w-7xl mx-auto px-2 lg:px-8">
			    <div className="relative flex justify-between h-16">
			      <div className="absolute inset-y-0 left-0 flex items-center">
			      </div>
			      <div className="flex-1 flex items-center justify-center">
			        <div className="flex-shrink-0 flex items-center ml-32 mr-64">
			          <svg width="29" height="40" viewBox="0 0 29 40" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M16.295 34.6667H12.8333L8.22 21L3.55333 34.6667H1.82167L7.35833 18.455L8.23167 15.9017H9.96333L16.295 34.6667ZM1.23 36.4H2.96333L1.73333 40H0L1.23 36.4ZM15.395 0H13.6667L11.9283 5.075L9.10333 13.3483L8.82333 14.1667H10.555L12.795 7.61167L23.6917 40H28.8917L15.395 0Z" fill="#014BAD"/>
								</svg>
								<div className="ml-1 mt-5 font-medium">Aham Learning</div>
			        </div>
			        <div className="hidden sm:ml-6 sm:flex">
			        	{options}
			        </div>
			      </div>
			    </div>
			  </div>
			</nav>
		</div>
	)
}

export default TopNavbar;