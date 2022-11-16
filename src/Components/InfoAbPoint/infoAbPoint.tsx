import { FC } from 'react'
import { FreeMode, Pagination } from 'swiper'

import style from './infoAbPoint.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

interface InfoAbPointProps {}

export const InfoAbPoint: FC<InfoAbPointProps> = ({}) => {
	return (
		<div className={style.wrap}>
			<div className={style.photo}>
				<img
					src="https://reghotel.com/wp-content/uploads/2019/09/krasivie.jpg"
					alt=""
				/>
			</div>

			<div className={style.content}>
				<div className={style.item}>
					<div className={style.name}>
						Tiki Waka<span>Hawaii</span>
					</div>

					<div className={style.opportunities}>
						<div className={style.share + ' ' + style.general}>П</div>
						<div className={style.like + ' ' + style.general}>Л</div>
					</div>
				</div>

				<div className={style.emoji}>
					<Swiper
						slidesPerView={3}
						spaceBetween={18}
						loop={true}
						freeMode={true}
						pagination={{
							clickable: true
						}}
						modules={[FreeMode, Pagination]}
						className={style.mySwiper}
					>
						<SwiperSlide className={style.slider}>Slide 1</SwiperSlide>
						<SwiperSlide className={style.slider}>Slide 2</SwiperSlide>
						<SwiperSlide className={style.slider}>Slide 3</SwiperSlide>
						<SwiperSlide className={style.slider}>Slide 4</SwiperSlide>
						<SwiperSlide className={style.slider}>Slide 5</SwiperSlide>
						<SwiperSlide className={style.slider}>Slide 6</SwiperSlide>
						<SwiperSlide className={style.slider}>Slide 7</SwiperSlide>
						<SwiperSlide className={style.slider}>Slide 8</SwiperSlide>
						<SwiperSlide className={style.slider}>Slide 9</SwiperSlide>
					</Swiper>
				</div>

				<div className={style.about}>
					<div className={style.title}>About</div>

					<div className={style.text}>
						At volutpat accumsan aliquet neque quis neque, diam. Amet, nisl leo
						purus lectus vel, tincidunt vehicula. Phasellus enim amet, lorem
						gravida sit donec ullamcorper nunc pretium. Turpis venenatis,
						consectetur ut scelerisque tortor. In elit a, tortor tincidunt
						quisque.
					</div>
				</div>

				<div className={style.reviews}>
					<div className={style.yourReviews}>
						<input type="text" placeholder="Type your comment here" />
						<button>Send</button>
					</div>

					<div className={style.usersReviews}>
						<div className={style.users}>
							<img className={style.usersAvatar} src="" alt="" />
							<div className={style.usersName}>Kazanbi</div>
						</div>

						<div className={style.usersText}>Description</div>
					</div>
				</div>
			</div>
		</div>
	)
}
