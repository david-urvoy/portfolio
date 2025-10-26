import { App } from '@/app'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Cv } from './cv'
import './index.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
        <Cv />
    </StrictMode>
)
