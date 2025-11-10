import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import { HelmetProvider } from "react-helmet-async";
import './index.scss';
import { App } from './App';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<BrowserRouter basename='/'>
		<AuthProvider>
			<div className='min-h-screen flex flex-col'>
				<Header />

				<main className='flex-1'>
					<HelmetProvider>
						<App />
					</HelmetProvider>
				</main>

				<Footer />
			</div>
		</AuthProvider>
	</BrowserRouter>
);
