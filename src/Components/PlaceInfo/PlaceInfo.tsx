import 'swiper/css'

import style from 'Components/PlaceInfo/PlaceInfo.module.scss'
import { cn } from 'Helper/Helper'
import { FC } from 'react'
import { GetPlace } from 'Redux/Slices/Place/Place.Get'
import { FreeMode, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

interface InfoAbPointProps {}

export const PlaceInfo: FC<InfoAbPointProps> = ({}) => {
	const { currentPlace } = GetPlace()

	if (!currentPlace) return null

	return (
		<div className={style.wrap}>
			<SwiperImg />
			<div className={style.content}>
				<HeadTitle />

				<SwiperWrap />
				<About />

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

const About = () => {
	return (
		<div className={style.about}>
			<div className={style.title}>About</div>

			<div className={style.text}>
				At volutpat accumsan aliquet neque quis neque, diam. Amet, nisl leo
				purus lectus vel, tincidunt vehicula. Phasellus enim amet, lorem gravida
				sit donec ullamcorper nunc pretium. Turpis venenatis, consectetur ut
				scelerisque tortor. In elit a, tortor tincidunt quisque.
			</div>
		</div>
	)
}

const HeadTitle = () => {
	const { title, address } = GetPlace().currentPlace!

	const clShare = cn(style.share, style.general)
	const clLine = cn(style.like, style.general)

	return (
		<div className={style.item}>
			<div className={style.name}>
				{title}
				<span>{address}</span>
			</div>

			<div className={style.opportunities}>
				<div className={clShare}>П</div>
				<div className={clLine}>Л</div>
			</div>
		</div>
	)
}

const SwiperWrap = () => {
	return (
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
	)
}

const SwiperImg = () => {
	return (
		<div className={style.photo}>
			<img
				src="https://reghotel.com/wp-content/uploads/2019/09/krasivie.jpg"
				alt=""
			/>
		</div>
	)
}
