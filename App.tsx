import { useState } from 'react'

const emojis = [
  {
    id: 1,
    emoji: '💯',
    title: '100',
    keywords: 'Hundred, points, symbol, wow, win, perfect, parties',
  },
  {
    id: 2,
    emoji: '🔢',
    title: '1234',
    keywords: 'input symbol for numbers symbol',
  },
  {
    id: 3,
    emoji: '🔢',
    title: '1234',
    keywords: 'input symbol for numbers symbol',
  },
]

function App() {
  const [search, setSearch] = useState('')

  const filteredEmojis = emojis.filter((item) => {
    const text = `${item.title} ${item.keywords}`.toLowerCase()
    return text.includes(search.trim().toLowerCase())
  })

  return (
    <div className="app">
      <header className="header">
        <h1>Emoji Finder</h1>
        <p>Find emoji by keywords</p>
        <input
          className="search"
          type="search"
          placeholder="Placeholder"
          aria-label="Search emoji"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </header>

      <main className="main">
        <div className="emoji-grid">
          {filteredEmojis.map((item) => (
            <div className="emoji-card" key={item.id}>
              <div className="emoji-icon">{item.emoji}</div>
              <h2>{item.title}</h2>
              <p>{item.keywords}</p>
            </div>
          ))}
        </div>
        {filteredEmojis.length === 0 && (
          <p className="empty">Emoji not found</p>
        )}
      </main>
    </div>
  )
}

export default App
