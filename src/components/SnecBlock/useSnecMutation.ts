import { useCallback } from 'react'
import { useAppDispatch } from '../../redux/hook'
import { buyOnClick, removeOnClick } from '../../redux/slice/basketSlice'
import { likeOnClick, removeLikeOnClick } from '../../redux/slice/likeSlice'
import { ISnecBlock } from '../../types/data'


type TypeMutateSnec = {
	type: 'favorite' | 'basket'
	item: ISnecBlock
	operation: 'add' | 'remove'
}
const useSnecMutation = () => {
	const dispatch = useAppDispatch()

	const mutate = ({
		type,
		item,
		operation
	}: TypeMutateSnec) => {
		if (type === 'favorite') {
			return dispatch(operation === 'add' ? likeOnClick(item) : removeLikeOnClick(item))
		} else {
			return dispatch(operation === 'add' ? buyOnClick(item) : removeOnClick(item))
		}

	}
	return useCallback((p: TypeMutateSnec) => mutate(p), [dispatch])
}


export default useSnecMutation