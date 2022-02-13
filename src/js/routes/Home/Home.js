import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { ACTIONS } from 'Actions/Global';
import { Flex, Box } from 'reflexbox';
import Button from 'Atoms/Button';
import Logo from 'Atoms/Logo';
import { FaChevronRight, FaMapPin, FaBrain, FaSkiing } from 'react-icons/fa';
import Illuminate from 'Contextual/insights-hero@2x.png';
import { container } from 'Variants/Grid';
import { config } from 'Variants/Tailwind';
// import content from './Home.json';

export default function Home() {
	const { name } = useSelector((state) => state, shallowEqual);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	// const { headline } = content;

	return (
		<main>
			<section className="bg-purple text-white">
				<Flex
					alignItems={['start', 'center']}
					flexWrap="wrap"
					height={['auto', 600]}
					justifyContent="center"
					pt={[3, 0]}
					pb={[5, 0]}
					{...container}
				>
					<Box width={[1, 1 / 2]} px={3} Reflex>
						<Logo />
						<p className="font-bold mt-6 text-red">Welcome, {name}! </p>
						<h1 className="mt-2">
							Are you ready to learn about Heap Illuminate?
						</h1>
						<Button
							className="inline-flex mr-4 mt-8"
							onClick={() => {
								dispatch({
									type: ACTIONS.UPDATE_NAME,
									payload: { name: 'Jameson' },
								});
								navigate('/login');
							}}
						>
							<span className="mr-16">Yes, log in</span> <FaChevronRight />
						</Button>
						<Button
							className="inline-flex mt-8"
							onClick={() =>
								window.location.assign('https://heap.io/platform/illuminate')
							}
							secondary
						>
							<span className="mr-16">No, go back</span>
						</Button>
					</Box>
					<Box width={[1, 1 / 2]} pt={[4, 0]} px={3} Reflex>
						<img src={Illuminate} />
					</Box>
				</Flex>
			</section>
			<section className="bg-gray-light">
				<Flex flexWrap="wrap" justifyContent="center" py={4} {...container}>
					<Box width={[1, 1 / 3]} px={3} py={4} textAlign="center" Reflex>
						<FaMapPin
							className="center-h"
							color={config.colors.purple}
							size={48}
						/>
						<h4 className="mt-4">Pinpoint hidden friction points</h4>
						<p className="mt-2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</Box>
					<Box width={[1, 1 / 3]} px={3} py={4} textAlign="center" Reflex>
						<FaBrain
							className="center-h"
							color={config.colors.purple}
							size={48}
						/>
						<h4 className="mt-4">Avoid confirmation bias</h4>
						<p className="mt-2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</Box>
					<Box width={[1, 1 / 3]} px={3} py={4} textAlign="center" Reflex>
						<FaSkiing
							className="center-h"
							color={config.colors.purple}
							size={48}
						/>
						<h4 className="mt-4">Get fast, definitive answers</h4>
						<p className="mt-2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</Box>
				</Flex>
			</section>
		</main>
	);
}

Home.defaultProps = {};

Home.propTypes = {};
// children: PropTypes.any
