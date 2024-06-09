import { createSlice } from '@reduxjs/toolkit'
import { ISnecBlock } from '../../types/data'

interface ILike {
	favorites: ISnecBlock[]
}
const initialState: ILike = {
	favorites: []
}
const likeSlice = createSlice({
	name: 'like',
	initialState,
	reducers: {
		likeOnClick: (state, { payload }) => {
			state.favorites.push(payload)
		},
		removeLikeOnClick: (state, { payload }) => {
			const newFavorite = state.favorites.filter((item) => item.id !== payload.id)
			state.favorites = newFavorite
		}
	}
})
export const { likeOnClick, removeLikeOnClick } = likeSlice.actions

export default likeSlice.reducer
