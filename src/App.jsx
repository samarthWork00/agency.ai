import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'

function App() {

    const [theme, setTheme] = useState(
        localStorage.theme === 'dark' ? 'dark' : 'light'
    )

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
            localStorage.theme = 'dark'
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.theme = 'light'
        }
    }, [theme])

    return (
        <>
            <Navbar
                theme={theme}
                setTheme={setTheme}
            />

            {/* Rest of your website */}
        </>
    )
}

export default App