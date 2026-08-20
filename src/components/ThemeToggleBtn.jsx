import React from 'react'

const ThemeToggleBtn = ({ theme, setTheme }) => {

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'

        setTheme(newTheme)
        localStorage.theme = newTheme

        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    return (
        <button
            onClick={toggleTheme}
            className="relative w-12 h-7 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle theme"
        >
            <span
                className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow-md
                flex items-center justify-center
                transition-transform duration-300
                ${theme === 'dark' ? 'translate-x-5' : 'translate-x-0'}`}
            >
                <span className="text-[10px]">
                    {theme === 'dark' ? '🌙' : '☀️'}
                </span>
            </span>
        </button>
    )
}

export default ThemeToggleBtn