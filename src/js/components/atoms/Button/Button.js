import React from 'react';
import PropTypes from 'prop-types';
import './Button.less';

export default function Button({
	children,
	className,
	href,
	icon,
	onClick,
	purple,
	rel,
	secondary,
	target,
	text,
}) {
	const type = () => {
		switch (true) {
			case secondary:
				return 'bg-gray-light hover:bg-gray-medium text-gray-dark hover:text-gray-light';
			case purple:
				return 'bg-purple hover:bg-light-purple text-white hover:text-gray-light';
			default:
				return 'bg-red hover:bg-red-dark text-white';
		}
	};

	return (
		<a
			className={`atom-button cursor-pointer flex font-bold h-12 items-center pl-6 pr-4 relative rounded-lg transition-colors w-48 ${className} ${type()}`}
			href={href}
			onClick={(e) => {
				if (onClick) {
					e.preventDefault();
					onClick();
				}
			}}
			rel={rel}
			target={target}
		>
			{text}
			{icon && <span className="absolute right-4">{icon}</span>}
			{children}
		</a>
	);
}

Button.defaultProps = {
	children: '',
	className: '',
	href: '#',
	icon: null,
	onClick: null,
	purple: false,
	rel: null,
	secondary: false,
	target: null,
	text: '',
};

Button.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	href: PropTypes.string,
	icon: PropTypes.element,
	onClick: PropTypes.func,
	purple: PropTypes.bool,
	rel: PropTypes.string,
	secondary: PropTypes.bool,
	target: PropTypes.string,
	text: PropTypes.string,
};
