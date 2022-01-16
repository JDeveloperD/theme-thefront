import Router from 'routes/Router'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProviderGlobal } from 'store/Theme'
import { AnimatePresence } from 'framer-motion'

const App = () => {
  return (
    <ThemeProviderGlobal>
      <AnimatePresence exitBeforeEnter>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AnimatePresence>
    </ThemeProviderGlobal>
  )
}

export default App
