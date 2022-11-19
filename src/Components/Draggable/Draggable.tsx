import { FC, useState } from 'react'

import style from './Draggable.module.scss'

import { motion } from 'framer-motion'
import { PlaceInfo } from 'Components/PlaceInfo/PlaceInfo'
import {AllPlace} from "../AllPlace/AllPlace";

interface DraggableProps {}

const variants = {
	open: { y: 0 },
	close: { y: 500 }
}

export const Draggable: FC<DraggableProps> = ({}) => {
	const [swipe, setSwipe] = useState(false)

	return (
		<>
			<motion.div animate={swipe ? 'open' : 'close'} variants={variants}>
				<motion.button
					className={style.draggable}
					onClick={() => setSwipe(!swipe)}
				></motion.button>
				<PlaceInfo />
				<AllPlace />
			</motion.div>
		</>
	)
}
