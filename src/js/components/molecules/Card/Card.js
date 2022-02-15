import React from 'react';
import PropTypes from 'prop-types';
import {
	FaChevronCircleLeft,
	FaChevronCircleRight,
	FaMinusCircle,
} from 'react-icons/fa';
import { config } from 'Variants/Tailwind';
import './Card.less';

export default function Card({
	className,
	deleteClick,
	nextClick,
	prevClick,
	title,
}) {
	return (
		<div
			className={`molecule-card border-2 border-purple border-solid mt-4 p-16 relative rounded-md ${className}`}
		>
			<h4>{title}</h4>
			<div className="molecule-car__arrows flex justify-center mt-4">
				<FaChevronCircleLeft
					className="mr-4 cursor-pointer"
					color={config.colors.red}
					onClick={prevClick}
					size={24}
				/>
				<FaChevronCircleRight
					className="cursor-pointer"
					color={config.colors.red}
					onClick={nextClick}
					size={24}
				/>
			</div>
			<FaMinusCircle
				className="absolute cursor-pointer right-4 top-4"
				color={config.colors['gray']}
				onClick={deleteClick}
			/>
		</div>
	);
}

Card.defaultProps = {
	className: '',
	deleteClick: null,
	prevClick: null,
	nextClick: null,
	title: '',
};

Card.propTypes = {
	className: PropTypes.string,
	deleteClick: PropTypes.func,
	prevClick: PropTypes.func,
	nextClick: PropTypes.func,
	title: PropTypes.string,
};
