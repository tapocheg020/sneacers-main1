import { motion } from 'framer-motion'
import { FC } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsPlusLg } from 'react-icons/bs'
import { ISnecBlock } from '../../types/data'
import styles from './SnecBlock.module.scss'
import { pVariants } from './snec.motion-variant'
import useSnecMutation from './useSnecMutation'
import useSnecState from './useSnecState'
const SnecBlock: FC<ISnecBlock> = item => {
	const {
		snecState: { isBuy, isLike }
	} = useSnecState(item.id)
	const mutate = useSnecMutation()
	const onClickLike = () =>
		mutate({
			item,
			type: 'favorite',
			operation: isLike ? 'remove' : 'add'
		})
	const onClickBuyOrRemove = () =>
		mutate({
			item,
			type: 'basket',
			operation: isBuy ? 'remove' : 'add'
		})
	console.log(item)
	return (
		<motion.div
			variants={pVariants}
			initial={'hidden'}
			animate={'visible'}
			transition={{
				duration: 1
			}}
			className={styles.wrapper}
		>
			<button
				onClick={() => onClickLike()}
				className={`${styles.likes} ${isLike ? styles.isLike : ''}`}
			>
				<AiOutlineHeart className={styles.svg} />
			</button>
			<div className={styles.main}>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<img src={item.imgUrl} alt='' />
				</div>
				<div className={styles.desc}>
					<p>{item.title}</p>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center'
					}}
				>
					<div className={styles.price}>
						<span>Цена:</span>
						<p>{item.price}руб.</p>
					</div>
					<div className={`${styles.buy} ${isBuy ? styles.isBuy : ''} `}>
						<button onClick={() => onClickBuyOrRemove()}>
							{isBuy ? (
								<img src='/public/bi_check-lg.svg' />
							) : (
								<BsPlusLg className={styles.svg} />
							)}
						</button>
					</div>
				</div>
			</div>
		</motion.div>
	)
}

export default SnecBlock
