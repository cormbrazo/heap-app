import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';
import defaultLogo from 'Logos/heap.svg';
import './Logo.less';

export default function Logo({ className, height, src, width }) {
	return <SVG className={className} height={height} src={src} width={width} />;
}

Logo.defaultProps = { className: '', height: 48, src: defaultLogo, width: 140 };

Logo.propTypes = {
	className: PropTypes.string,
	height: PropTypes.number,
	src: PropTypes.string,
	width: PropTypes.number,
};
