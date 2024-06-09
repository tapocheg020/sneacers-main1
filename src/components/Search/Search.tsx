import debounce from 'lodash.debounce'
import { ChangeEvent, FC, useCallback, useContext, useState } from 'react'
import { SearchContext } from '../../providers/SearchProvider'
import styles from './Search.module.scss'
const Search: FC = () => {
	const [searchValue, setSearchValue] = useState<string>('')
	const { setValue } = useContext(SearchContext)
	const searchOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
		onSearch(e.target.value)
	}
	const onSearch = useCallback(
		debounce(value => {
			setValue ? setValue(value) : ''
		}, 150),
		[]
	)
	return (
		<div>
			<input
				type='text'
				value={searchValue}
				onChange={searchOnChange}
				className={styles.Search}
				placeholder='Поиск...'
			/>
			<img src='public/Vector.svg' alt='' className={styles.img} />
		</div>
	)
}

export default Search
