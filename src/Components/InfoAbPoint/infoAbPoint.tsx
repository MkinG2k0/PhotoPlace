import { FC } from 'react'

import style from './InfoAbPoint.module.scss'

interface InfoAbPointProps {}

export const InfoAbPoint: FC<InfoAbPointProps> = ({}) => {
	return (
		<div className={style.wrap}>
			<div className={style.content}>
				<div className={style.photo}></div>

				<div className={style.item}>
					<div className={style.name}>
						Tiki Waka<span>Hawaii</span>
					</div>

					<div className={style.opportunities}>
						<div className={style.share}>Поделиться</div>
						<div className={style.like}>Лайк</div>
					</div>
				</div>
			</div>
		</div>
	)
}
