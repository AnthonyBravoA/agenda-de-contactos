interface ThemeToggleProps {
  isDarkTheme: boolean
  onToggle: () => void
}

function ThemeToggle({ isDarkTheme, onToggle }: ThemeToggleProps) {

  return (
    <button onClick={onToggle} className="theme-toggle">
      {isDarkTheme ? '☀️ Claro' : '🌙 Oscuro'}
    </button>
  )
}

export default ThemeToggle