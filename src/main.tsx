import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import SearchProvider from './providers/SearchProvider.tsx'
import store from './redux/store.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<BrowserRouter>
		<Provider store={store}>
			<SearchProvider>
				<App />
			</SearchProvider>
		</Provider>
	</BrowserRouter>
)
