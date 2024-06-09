import { useMemo } from 'react'
import { useAppSelector } from '../../redux/hook'

const useSnecState = (id: string) => {
	const { items } = useAppSelector(state => state.basket)
	const { favorites } = useAppSelector(state => state.like)

	const snecState = useMemo(() => {
		return {
			isBuy: items.find(el => el.id === id) ? true : false,
			isLike: favorites.find(el => el.id === id) ? true : false
		}
	}, [items, favorites])


	return { snecState }
}
export default useSnecState