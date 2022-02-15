import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'reflexbox';
import Logo from 'Atoms/Logo';
import logo from 'Logos/heap-purple.svg';
import { container } from 'Variants/Grid';

export default function Footer({ copyright }) {
	return (
		<section className="bg-white py-6">
			<Flex alignItems="center" {...container}>
				<Box pl={3} pr={1}>
					<Logo src={logo} />
				</Box>
				<Box px={3}>
					<span className="text-sm">{copyright}</span>
				</Box>
			</Flex>
		</section>
	);
}

Footer.defaultProps = { copyright: `© ${new Date().getFullYear()} Heap, Inc.` };

Footer.propTypes = { copyright: PropTypes.string };
