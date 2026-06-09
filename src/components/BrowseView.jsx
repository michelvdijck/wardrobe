import { useState } from 'react'

function BackIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2.5 7L5.5 10L11.5 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const TABS = [
  { key: 'tops', label: 'Tops' },
  { key: 'bottoms', label: 'Bottoms' },
  { key: 'shoes', label: 'Shoes' },
]

function selectedKey(category) {
  return category === 'tops' ? 'top' : category === 'bottoms' ? 'bottom' : 'shoe'
}

export default function BrowseView({ clothes, initialCategory, selected, onSelect, onBack }) {
  const [activeTab, setActiveTab] = useState(initialCategory)

  const items = clothes[activeTab] ?? []
  const currentKey = selectedKey(activeTab)
  const currentIndex = selected[currentKey]

  return (
    <div className="flex flex-col h-screen max-h-screen">

      {/* Header */}
      <header className="flex items-center gap-4 px-5 pt-8 pb-4 shrink-0">
        <button
          onClick={onBack}
          className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-800 transition-all"
          aria-label="Back"
        >
          <BackIcon />
        </button>
        <h1 className="text-xl font-light tracking-[0.12em] text-stone-800">Browse</h1>
      </header>

      {/* Tabs */}
      <div className="flex gap-1 px-5 pb-4 shrink-0">
        {TABS.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-5 py-2 rounded-full text-[11px] uppercase tracking-widest font-medium transition-all ${
              activeTab === tab.key
                ? 'bg-stone-800 text-white'
                : 'bg-stone-100 text-stone-500 hover:bg-stone-200 hover:text-stone-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="flex-1 overflow-y-auto px-5 pb-8">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-48 gap-3">
            <div className="w-16 h-16 rounded-2xl border-2 border-dashed border-stone-200 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M11 4V18M4 11H18" stroke="#D4D0CA" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-stone-300 text-center leading-relaxed">
              Add images to<br />
              <code className="font-mono text-stone-400">src/assets/clothes/{activeTab}/</code>
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-3">
            {items.map((item, i) => {
              const isSelected = i === currentIndex
              return (
                <button
                  key={item.id}
                  onClick={() => onSelect(activeTab, i)}
                  className={`relative aspect-square rounded-2xl overflow-hidden transition-all duration-200 ${
                    isSelected
                      ? 'ring-2 ring-stone-700 ring-offset-2 ring-offset-stone-50 shadow-md'
                      : 'ring-1 ring-stone-100 hover:ring-stone-300 hover:shadow-sm'
                  }`}
                >
                  <img
                    src={item.url}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />

                  {/* Selected badge */}
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-5 h-5 bg-stone-800 rounded-full flex items-center justify-center shadow">
                      <CheckIcon />
                    </div>
                  )}

                  {/* Name tooltip */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/30 to-transparent pt-4 pb-2 px-2">
                    <p className="text-white text-[9px] uppercase tracking-wider truncate opacity-80">
                      {item.name}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
