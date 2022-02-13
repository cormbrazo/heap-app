import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Flex, Box } from 'reflexbox';

export default function Login() {
	const { name } = useSelector((state) => state);

	return (
		<main>
			<Flex alignItems="center" flexWrap="wrap">
				<Box width={1} p={16} Reflex>
					<h1>{name}</h1>
				</Box>
			</Flex>
		</main>
	);
}

Login.defaultProps = {};

Login.propTypes = {};
// children: PropTypes.any
