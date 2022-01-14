import Router from 'routes/Router'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProviderGlobal } from 'store/Theme'

const App = () => {
  return (
    <ThemeProviderGlobal>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProviderGlobal>
  )
}

export default App
