import { useState } from 'react'
import OutfitView from './components/OutfitView'
import BrowseView from './components/BrowseView'

const topModules = import.meta.glob('./assets/clothes/tops/*', { eager: true })
const bottomModules = import.meta.glob('./assets/clothes/bottoms/*', { eager: true })
const shoeModules = import.meta.glob('./assets/clothes/shoes/*', { eager: true })

function processModules(modules) {
  return Object.entries(modules)
    .filter(([path]) => /\.(jpe?g|png|webp|avif|gif)$/i.test(path))
    .map(([path, mod]) => ({
      id: path,
      url: mod.default,
      name: path.split('/').pop().replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '),
    }))
}

const CLOTHES = {
  tops: processModules(topModules),
  bottoms: processModules(bottomModules),
  shoes: processModules(shoeModules),
}

export default function App() {
  const [view, setView] = useState('outfit')
  const [browseCategory, setBrowseCategory] = useState('tops')
  const [selected, setSelected] = useState({ top: 0, bottom: 0, shoe: 0 })

  function handleBrowse(category) {
    setBrowseCategory(category)
    setView('browse')
  }

  function handleSelect(category, index) {
    const key = category === 'tops' ? 'top' : category === 'bottoms' ? 'bottom' : 'shoe'
    setSelected(s => ({ ...s, [key]: index }))
  }

  return (
    <div className="min-h-screen bg-stone-50 select-none">
      {view === 'outfit' ? (
        <OutfitView
          clothes={CLOTHES}
          selected={selected}
          setSelected={setSelected}
          onBrowse={handleBrowse}
        />
      ) : (
        <BrowseView
          clothes={CLOTHES}
          initialCategory={browseCategory}
          selected={selected}
          onSelect={handleSelect}
          onBack={() => setView('outfit')}
        />
      )}
    </div>
  )
}
