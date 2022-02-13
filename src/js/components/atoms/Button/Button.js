import React from 'react';
import PropTypes from 'prop-types';
import './Button.less';

export default function Button({ children, className, onClick, secondary }) {
	const type = secondary
		? 'bg-gray-light hover:bg-gray-medium text-gray-dark hover:text-gray-light'
		: 'bg-red hover:bg-red-dark text-white';

	return (
		<a
			className={`atom-button cursor-pointer flex font-bold h-12 items-center justify-center rounded-lg transition-colors w-48 ${type} ${className}`}
			onClick={onClick}
		>
			{children}
		</a>
	);
}

Button.defaultProps = {
	children: 'Button children',
	className: '',
	secondary: false,
};

Button.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	onClick: PropTypes.func,
	secondary: PropTypes.bool,
};
