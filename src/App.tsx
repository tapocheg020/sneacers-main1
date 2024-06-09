import { FC, useEffect, useRef } from 'react'
import './assets/global.scss'
import Header from './components/Header/Header'
import Router from './router/Router'
import Modal from './components/Modal/Modal'
import { useDispatch } from 'react-redux'
import { setIsOpen } from './redux/slice/basketSlice'
const App: FC = () => {
	const dispatch = useDispatch()
	const modalRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		const handleClick = (event: any) => {
			const path = event.path || (event.composedPath && event.composedPath())
			if (!path.includes(modalRef.current)) {
				dispatch(setIsOpen(false))
			}
		}
		;(document.querySelector('#body') as HTMLInputElement).addEventListener(
			'click',
			handleClick
		)

		return () => {
			;(
				document.querySelector('#body') as HTMLInputElement
			).removeEventListener('click', handleClick)
		}
	}, [])
	return (
		<div className='body'>
			<Header />
			<div id='body'>
				<Router />
				<Modal ref={modalRef} />
			</div>
		</div>
	)
}

export default App
