import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';
import Monogram from 'Logos/heap-monogram.svg';
import './Loader.less';

export default function Loader({
	className,
	fullScreen,
	height,
	src,
	text,
	width,
}) {
	return (
		<div
			className={`atom-loader animate-pulse inline-flex items-center flex-col gap-2 justify-center text-center text-red z-50 ${className} ${
				fullScreen ? 'absolute bg-purple inset-0' : ''
			}`}
		>
			<SVG height={height} src={src} width={width} />
			{text && <h6>{text}</h6>}
		</div>
	);
}

Loader.defaultProps = {
	className: '',
	fullScreen: false,
	height: 32,
	src: Monogram,
	text: '',
	width: 32,
};

Loader.propTypes = {
	className: PropTypes.string,
	fullScreen: PropTypes.bool,
	height: PropTypes.number,
	src: PropTypes.string,
	text: PropTypes.string,
	width: PropTypes.number,
};
