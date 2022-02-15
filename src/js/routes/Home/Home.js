import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';
import { Flex, Box } from 'reflexbox';
import Button from 'Atoms/Button';
import Logo from 'Atoms/Logo';
import Footer from 'Organisms/Footer';
import { FaChevronRight, FaMapPin, FaBrain, FaSkiing } from 'react-icons/fa';
import Illuminate from 'Contextual/insights-hero@2x.png';
import { container } from 'Variants/Grid';
import { config } from 'Variants/Tailwind';
import content from './Home.content.json';

export default function Home() {
	const { name } = useSelector((state) => state, shallowEqual);
	const navigate = useNavigate();
	const { features, hero } = content;
	const featureIcons = [<FaMapPin />, <FaBrain />, <FaSkiing />];

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
						<p className="font-bold mt-6 text-red">
							{hero.intro} {name}!{' '}
						</p>
						<h1 className="mt-2">{hero.headline}</h1>
						<Button
							className="inline-flex mr-4 mt-8"
							icon={<FaChevronRight />}
							onClick={() => {
								navigate('/kanban');
							}}
							text={hero.mainCTA}
						/>
						<Button
							className="inline-flex mt-4"
							href="https://heap.io/platform/illuminate"
							secondary
							text={hero.secondaryCTA}
						/>
					</Box>
					<Box width={[1, 1 / 2]} pt={[4, 0]} px={3} Reflex>
						<img src={Illuminate} />
					</Box>
				</Flex>
			</section>
			<section className="bg-gray-light">
				<Flex flexWrap="wrap" justifyContent="center" py={4} {...container}>
					{features.map((feature, index) => (
						<Box
							width={[1, 1 / 3]}
							key={feature.headline}
							px={3}
							py={4}
							textAlign="center"
							Reflex
						>
							{React.cloneElement(featureIcons[index], {
								className: 'mx-auto',
								color: `${config.colors.purple}`,
								size: 48,
							})}
							<h4 className="mt-4">{feature.headline}</h4>
							<p className="mt-2">{feature.paragraph}</p>
						</Box>
					))}
				</Flex>
			</section>
			<Footer />
		</main>
	);
}

Home.defaultProps = {};

Home.propTypes = {};
