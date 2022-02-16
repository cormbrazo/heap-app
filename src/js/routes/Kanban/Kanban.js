import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlus, FaMapPin } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { ACTIONS } from 'Actions/Global';
import { Flex, Box } from 'reflexbox';
import Button from 'Atoms/Button';
import Card from 'Molecules/Card';
import { container } from 'Variants/Grid';
import content from './Kanban.content.json';

export default function Kanban() {
	const { toDo, inProgress, done } = useSelector((state) => state);
	const { defaultCard, input, kanban } = content;
	const dispatch = useDispatch();
	const [inputVisible, setInputVisible] = useState(-1);
	const [activeNewCardInfo, setActiveNewCardInfo] = useState('');

	const handleAddCard = (col) =>
		activeNewCardInfo &&
		dispatch({
			type: ACTIONS.ADD_CARD,
			payload: {
				title: activeNewCardInfo,
				type: col.actionType,
			},
		});

	const renderCard = (card, index, type) => {
		return (
			<Card
				deleteClick={() => {
					dispatch({
						type: ACTIONS.DELETE_CARD,
						payload: {
							index,
							type,
						},
					});
				}}
				nextClick={() =>
					dispatch({
						type: ACTIONS.MOVE_CARD,
						payload: {
							index,
							type,
						},
					})
				}
				prevClick={() =>
					dispatch({
						type: ACTIONS.MOVE_CARD,
						payload: {
							index,
							prev: true,
							type,
						},
					})
				}
				key={card.title}
				title={card.title}
			/>
		);
	};

	const renderCards = (type) => {
		switch (type) {
			case 'inProgress': {
				return inProgress.map((card, index) => renderCard(card, index, type));
			}
			case 'done': {
				return done.map((card, index) => renderCard(card, index, type));
			}
			default: {
				return toDo.map((card, index) => renderCard(card, index, type));
			}
		}
	};

	useEffect(() => {
		setActiveNewCardInfo('');
		setInputVisible(-1);
	}, [toDo, inProgress, done]);

	return (
		<main className="bg-gray-light">
			<Flex justifyContent="center" pt={4} {...container}>
				<Box>
					<h1>Kanban Board</h1>
				</Box>
			</Flex>
			<Flex
				alignItems="start"
				className="h-max min-h-screen"
				flexWrap="wrap"
				justifyContent="center"
				pb={5}
				pt={3}
				{...container}
			>
				{kanban.map((col, index) => (
					<Box
						key={col.headline}
						textAlign="center"
						width={[1, 1 / 3]}
						px={3}
						py={4}
						Reflex
					>
						<h3 className="text-purple">{col.headline}</h3>
						{renderCards(col.actionType, index)}
						{index === inputVisible && (
							<div className="flex justify-end flex-wrap">
								<input
									autoFocus
									className="border-2 border-purple h-12 mt-4 px-4 rounded-md w-full"
									onChange={(e) => {
										const { value } = e.currentTarget;

										setActiveNewCardInfo(value);
									}}
									onKeyDown={(e) => {
										if (e.key === 'Enter') {
											handleAddCard(col);
										}
									}}
									placeholder={input.placeholder}
									type="text"
								/>
								<Button
									className="mt-4"
									icon={<FaMapPin />}
									onClick={() => handleAddCard(col)}
									purple
									text={defaultCard.finish}
								/>
							</div>
						)}
						<Button
							className="mt-6 mx-auto"
							full
							icon={<FaPlus />}
							onClick={() => setInputVisible(index)}
							text={defaultCard.CTA}
						/>
					</Box>
				))}
			</Flex>
		</main>
	);
}

Kanban.defaultProps = {};

Kanban.propTypes = {};
