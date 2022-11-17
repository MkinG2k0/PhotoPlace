import 'swiper/css'

import style from 'Components/PlaceInfo/PlaceInfo.module.scss'
import { cn } from 'Helper/Helper'
import { Emoji } from 'Icons/Emoji'
import { Opportunities } from 'Icons/opportunities'
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

				<Reviews />
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
				<span>
					<Opportunities.Address />
					{address}
				</span>
			</div>

			<div className={style.opportunities}>
				<div className={clShare}>
					<Opportunities.Share />
				</div>
				<div className={clLine}>
					<Opportunities.Like />
				</div>
			</div>
		</div>
	)
}

const SwiperWrap = () => {
	return (
		<div className={style.emoji}>
			<Swiper
				slidesPerView={4}
				spaceBetween={18}
				loop={true}
				freeMode={true}
				pagination={{
					clickable: true
				}}
				modules={[FreeMode, Pagination]}
				className={style.mySwiper}
			>
				<SwiperSlide className={style.slider}>
					<Emoji.AngryFace />
				</SwiperSlide>
				<SwiperSlide className={style.slider}>
					<Emoji.SmileFace />
				</SwiperSlide>
				<SwiperSlide className={style.slider}>
					<Emoji.FaceScreaming />
				</SwiperSlide>
				<SwiperSlide className={style.slider}>
					<Emoji.PensiveFace />
				</SwiperSlide>
				<SwiperSlide className={style.slider}>
					<Emoji.BeamingFace />
				</SwiperSlide>
				<SwiperSlide className={style.slider}>
					<Emoji.CryingFace />
				</SwiperSlide>
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

const Reviews = () => {
	return (
		<div className={style.reviews}>
			<div className={style.yourReviews}>
				<textarea placeholder="Type your comment here"></textarea>
				<button>Send</button>
			</div>

			<ReviewsWrapper />
			<ReviewsWrapper />
			<ReviewsWrapper />
		</div>
	)
}

const ReviewsWrapper = () => {
	return (
		<div className={style.reviewsWrapper}>
			<div className={style.usersReviews}>
				<div className={style.users}>
					<img
						className={style.usersAvatar}
						src="https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"
						alt=""
					/>
					<div className={style.usersName}>Kazanbi Abdulaev</div>
				</div>

				<div className={style.usersText}>Descriptin</div>
			</div>
		</div>
	)
}
