import React from 'react';
import classNames from "classnames";

function Footer() {

	const footerOptions = classNames(`text-sm leading-6 text-gray-300`);

	const menuHeadings = classNames(`mb-10 text-base leading-6 tracking-wider text-white-100`);

	const menuOptionsColor = {
		color: 'rgba(255, 255, 255, 0.64)'
	};

	const forLearners = ['Overview', 'Why Aham', 'How it works', 'Features', 'Success stories', 'Pricing'];

	const forEducators = ['Overview', 'Why Aham', 'How it works', 'Features', 'Success stories', 'Pricing/Earning'];

	const company = ['About us', 'Community', 'Courses', 'Hubs', 'Blog', 'Contact us', 'News', 'Careers'];

	const support = ['FAQ', 'Help', 'Resources', 'Terms', 'Privacy', 'Refunds'];

	return (
		<div>
			<div className="bg-black-7">
				  <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
					  <div className="flex">
					  	<div className="flex-shrink-0 flex mr-48 ml-32">
			          <svg width="29" height="40" viewBox="0 0 29 40" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M16.295 34.6667H12.8333L8.22 21L3.55333 34.6667H1.82167L7.35833 18.455L8.23167 15.9017H9.96333L16.295 34.6667ZM1.23 36.4H2.96333L1.73333 40H0L1.23 36.4ZM15.395 0H13.6667L11.9283 5.075L9.10333 13.3483L8.82333 14.1667H10.555L12.795 7.61167L23.6917 40H28.8917L15.395 0Z" fill="#fff"/>
								</svg>
								<div className="ml-1 mt-5 text-white font-medium">Aham Learning</div>
			        </div>
					    <div className="xl:grid xl:grid-cols-2 xl:gap-8">
					      <div className="grid grid-cols-2 gap-8 xl:col-span-2">
					        <div className="md:grid md:grid-cols-2 md:gap-8">
					          <div className="w-40">
					            <h4 className={menuHeadings}>
					              For Learners
					            </h4>
					            <ul className="mt-4">
					            	{
					            		forLearners.map((option, index) => {
					            			return (
								            	<li className="mb-4">
								            		<a href="#" className={footerOptions} style={menuOptionsColor}>
								            			{option}
								            		</a>
								            	</li>
				            				)
					            		})
					            	}
					            </ul>
					          </div>
					          <div className="mt-12 md:mt-0 w-40">
					            <h4 className={menuHeadings}>
					              For Educators
					            </h4>
					            <ul className="mt-4">
					              {
					            		forEducators.map((option, index) => {
					            			return (
								            	<li className="mb-4">
								            		<a href="#" className={footerOptions} style={menuOptionsColor}>
								            			{option}
								            		</a>
								            	</li>
				            				)
					            		})
					            	}
					            </ul>
					          </div>
					        </div>
					        <div className="md:grid md:grid-cols-2 md:gap-8">
					          <div className="w-40">
					            <h4 className={menuHeadings}>
					              Company
					            </h4>
					            <ul className="mt-4">
					              {
					            		company.map((option, index) => {
					            			return (
								            	<li className="mb-4">
								            		<a href="#" className={footerOptions} style={menuOptionsColor}>
								            			{option}
								            		</a>
								            	</li>
				            				)
					            		})
					            	}
					            </ul>
					          </div>
					          <div className="mt-12 md:mt-0 w-40">
					            <h4 className={menuHeadings}>
					              Support
					            </h4>
					            <ul className="mt-4">
					              {
					            		support.map((option, index) => {
					            			return (
								            	<li className="mb-4">
								            		<a href="#" className={footerOptions} style={menuOptionsColor}>
								            			{option}
								            		</a>
								            	</li>
				            				)
					            		})
					            	}
					            </ul>
					          </div>
					        </div>
					      </div>
					    </div>
				    </div>
				    <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
				      <div className="flex md:order-2 mr-5">
				        <a href="#" className="text-gray-400 hover:text-gray-300">
				          <span className="sr-only">Facebook</span>
				          <svg className="h-6 w-6" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
										<path d="M2 0H16C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0ZM15 2H12.5C11.5717 2 10.6815 2.36875 10.0251 3.02513C9.36875 3.6815 9 4.57174 9 5.5V8H7V11H9V18H12V11H15V8H12V6C12 5.73478 12.1054 5.48043 12.2929 5.29289C12.4804 5.10536 12.7348 5 13 5H15V2Z" fill="white" fillOpacity="0.64"/>
									</svg>
				        </a>
				        <a href="#" className="ml-6 text-gray-400 hover:text-gray-300">
				          <span className="sr-only">Twitter</span>
				          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
				            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
				          </svg>
				        </a>
				        <a href="#" className="ml-6 text-gray-400 hover:text-gray-300">
				          <span className="sr-only">Instagram</span>
				          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
				            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/>
				          </svg>
				        </a>
				        <a href="#" className="ml-6 text-gray-400 hover:text-gray-300">
				          <span className="sr-only">Youtube</span>
				          <svg className="h-6 w-6" viewBox="0 0 20 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
										<path d="M8 10L13.19 7L8 4V10ZM19.56 2.17C19.69 2.64 19.78 3.27 19.84 4.07C19.91 4.87 19.94 5.56 19.94 6.16L20 7C20 9.19 19.84 10.8 19.56 11.83C19.31 12.73 18.73 13.31 17.83 13.56C17.36 13.69 16.5 13.78 15.18 13.84C13.88 13.91 12.69 13.94 11.59 13.94L10 14C5.81 14 3.2 13.84 2.17 13.56C1.27 13.31 0.69 12.73 0.44 11.83C0.31 11.36 0.22 10.73 0.16 9.93C0.0900001 9.13 0.0599999 8.44 0.0599999 7.84L0 7C0 4.81 0.16 3.2 0.44 2.17C0.69 1.27 1.27 0.69 2.17 0.44C2.64 0.31 3.5 0.22 4.82 0.16C6.12 0.0899998 7.31 0.0599999 8.41 0.0599999L10 0C14.19 0 16.8 0.16 17.83 0.44C18.73 0.69 19.31 1.27 19.56 2.17Z" fill="white" fillOpacity="0.64"/>
									</svg>
				        </a>
				      </div>
				      <p className="mt-8 ml-32 text-base leading-6 text-gray-400 md:mt-0 md:order-1">
				        &copy; Aham Technologies Inc.
				      </p>
				    </div>
				  </div>
				</div>
		</div>
	)
}

export default Footer;