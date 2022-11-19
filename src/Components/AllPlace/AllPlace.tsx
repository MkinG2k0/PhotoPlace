import { FC } from 'react'

import style from './AllPlace.module.scss'

interface AllPlaceProps {}

export const AllPlace: FC<AllPlaceProps> = ({}) => {
	return (
		<div className={style.wrap}>
			<ul className={style.list}>
				{arrPlace.map((item) => (
					<Card key={item.title} />
				))}
			</ul>
		</div>
	)
}

const arrPlace = [
	{
		title: 'Blue Green ATM',
		description: 'Arrival 10:30',
		img: 'https://reghotel.com/wp-content/uploads/2019/09/krasivie.jpg'
	},
	{
		title: 'Blue Green ATM',
		description: 'Arrival 10:30',
		img: 'https://reghotel.com/wp-content/uploads/2019/09/krasivie.jpg'
	},
	{
		title: 'Blue Green ATM',
		description: 'Arrival 10:30',
		img: 'https://reghotel.com/wp-content/uploads/2019/09/krasivie.jpg'
	},
	{
		title: 'Blue Green ATM',
		description: 'Arrival 10:30',
		img: 'https://reghotel.com/wp-content/uploads/2019/09/krasivie.jpg'
	}
]

const Card = () => {
	return (
		<li>
			<a href="#">
				<div className={style.containerImg}>
					<img
						src="https://reghotel.com/wp-content/uploads/2019/09/krasivie.jpg"
						alt=""
					/>
				</div>
				<p>
					Blue Green ATM<span>Arrival 10:30</span>
				</p>
			</a>
		</li>
	)
}
