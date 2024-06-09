import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { removeOnClick } from '../../../redux/slice/basketSlice'
import { ISnecBlock } from '../../../types/data'
import styles from './FiledBasket.module.scss'

const Product: FC<ISnecBlock> = ({ id, title, price, imgUrl }) => {
	const dispatch = useDispatch()
	return (
		<div className={styles.wrapperProduct}>
			<div>
				<img className={styles.img} src={imgUrl} alt='' />
			</div>
			<div>
				<p>{title}</p>
				<span>{price} руб</span>
			</div>
			<div>
				<button onClick={() => dispatch(removeOnClick({ id }))}>
					<img src='public/servicesImg/Vector.png' alt='' />
				</button>
			</div>
		</div>
	)
}

export default Product
