import { createContext, useContext, useState } from 'react'

interface ThemeContextType {
  theme: string
  setTheme: (theme: string) => void
}
interface LocaleContextType {
  locale: string
  setLocale: (locale: string) => void
}
const ThemeContext = createContext<ThemeContextType | null>(null)
const LocaleContext = createContext<LocaleContextType | null>(null)

// 把子组件拆分出来，更清晰，形成子组件的状态隔离
const ThemeContextProvider = ThemeContext.Provider
const LocaleContextProvider = LocaleContext.Provider
export const UseContextDemo = () => {
  const [theme, setTheme] = useState('light')
  const [locale, setLocale] = useState('en')
  return (
    <ThemeContextProvider value={{ theme, setTheme }}>
      <LocaleContextProvider value={{ locale, setLocale }}>
        <CheckButton />
      </LocaleContextProvider>
    </ThemeContextProvider>
  )
}

const CheckButton = () => {
  const themeContext = useContext(ThemeContext)
  const localeContext = useContext(LocaleContext)
  return (
    <div>
      <button
        onClick={() => themeContext?.setTheme(themeContext.theme === 'light' ? 'dark' : 'light')}
        style={{
          color: themeContext?.theme === 'light' ? 'black' : 'white',
          backgroundColor: themeContext?.theme === 'light' ? 'white' : 'black',
        }}
      >
        {themeContext?.theme === 'light' ? '☀️' : '🌙'} {themeContext.theme}
      </button>
      <button onClick={() => localeContext?.setLocale(localeContext.locale === 'en' ? 'fr' : 'en')}>
        {localeContext?.locale === 'en' ? 'English' : '你好 '}
      </button>
    </div>
  )
}
