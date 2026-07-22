import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router'
import { Myshopeprovider } from './context/MyConext.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Myshopeprovider>
<App />
</Myshopeprovider>
</BrowserRouter>

  
)
