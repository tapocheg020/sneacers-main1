import { FC, useEffect } from 'react'
import Loader from '../../components/Loader/Loader'
import Search from '../../components/Search/Search'
import SearchItems from '../../components/SearchItems/SearchItems'
import Sorted from '../../components/Sorted/Sorted'
import Button from '../../components/UI/Button/Button'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { fetchSneckersGet } from '../../redux/slice/SnecGetSlice'
import styles from './Home.module.scss'
import { data } from './data'
const Home: FC = () => {
	const { items, status } = useAppSelector(state => state.snec)
	const dispatch = useAppDispatch()
	const { sortValue, orderValue } = useAppSelector(state => state.filter)
	const buyItem = () => {
		window.scrollTo({
			top: 700,
			behavior: 'smooth'
		})
	}
	useEffect(() => {
		const fetch = async() => {
			const sortedValue = data[sortValue].sorteding
			dispatch(fetchSneckersGet({sortedValue, orderValue}))
		}
		fetch()
	}, [sortValue, orderValue])

	return (
		<div className={styles.Home} >
			<div className={styles.stocks}>
				<div className={styles.col__left}>
					<p>
						<span>Stan Smith</span>, Forever!
					</p>
					<Button onClick={() => buyItem()}>Купить</Button>
				</div>
				<div className={styles.col__right}>
					<img src='public/image 6.png' alt='' />
				</div>
			</div>
			<div className={styles.main}>
				<div className={styles.title}>
					<h2>Все кроссовки</h2>
					<Search />
					<Sorted data={data} />
				</div>
				<div className={styles.items}>
					{status === 'loading' ? <Loader /> : <SearchItems items={items} />}
				</div>
			</div>
		</div>
	)
}

export default Home
