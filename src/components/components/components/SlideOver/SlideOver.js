import React, { forwardRef } from "react";
import Transition from "../../utils/Transition";
import Button from "../Button/Button";

const SlideOver = forwardRef(
	(
		{
			children,
			slideOverWidth,
			show,
			closePanel,
			hasBack,
			handleBack,
			hasSave,
			handlesave,
			saveLabel
		},
		ref
	) => {
		return (
			<Transition
				show={show}
				enter="transform transition ease-in-out duration-500"
				enterFrom="translate-x-full"
				enterTo="translate-x-0"
				leave="transform transition ease-in-out duration-500"
				leaveFrom="translate-x-0"
				leaveTo="translate-x-full"
			>
				<div className="fixed inset-0 overflow-hidden">
					<div className="absolute inset-0 overflow-hidden">
						<section className="absolute inset-y-0 right-0  max-w-full flex z-50">
							<div className={slideOverWidth}>
								<div className="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
									<div className="h-0 flex-1 py-6 overflow-y-scroll">
										<header className="px-4 sm:px-6 mb-12">
											<div className={`${hasBack ? "flex items-center justify-between" : "flex items-center justify-end"}`}>
												{hasBack && (
													<button
														aria-label="Go Back"
														className="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150"
														onClick={() => handleBack()}
													>
														<svg
															width="16"
															height="16"
															viewBox="0 0 16 16"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
																fill="#637381"
															/>
														</svg>
													</button>
												)}
												<button
													onClick={closePanel}
													aria-label="Close panel"
													className="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150"
												>
													<svg
														className="h-6 w-6"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth="2"
															d="M6 18L18 6M6 6l12 12"
														/>
													</svg>
												</button>
											</div>
										</header>
										<div className="px-6">{children}</div>
									</div>
									{hasSave && (
										<div className="p-4 flex justify-end">
											<Button
												labelText={saveLabel}
												type="submit"
												kind="big"
												buttonStyles="w-20 h-10 px-4 bg-blue-100 text-white-100 border rounded border-blue-100 font-medium text-base"
												buttonClick={() => handlesave()}
											/>
										</div>
									)}
								</div>
							</div>
						</section>
						<div className="w-full h-full z-40 bg-gray-400 opacity-25" />
					</div>
				</div>
			</Transition>
		);
	}
);

SlideOver.defaultProps = {
	slideOverWidth: "w-full",
	show: true,
	closePanel: () => {},
	hasBack: true,
	handleBack: () => {},
	hasSave: true,
	handlesave: () => {},
	saveLabel: "Save"
};

export default SlideOver;
