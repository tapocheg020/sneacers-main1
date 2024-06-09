import { FC, useContext } from 'react'
import { SearchContext } from '../../providers/SearchProvider'
import { IData } from '../../types/data'
import SnecBlock from '../SnecBlock/SnecBlock'

interface ISearchItems {
	items: IData[]
}

const SearchItems: FC<ISearchItems> = ({ items }) => {
	const { value } = useContext(SearchContext)
	return (
		<>
			{items
				.filter(item => {
					return item.title.toLowerCase().includes(value.toLowerCase())
				})
				.map(item => (
					<SnecBlock {...item} key={item.id} />
				))}
		</>
	)
}

export default SearchItems
