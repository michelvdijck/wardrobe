import MannequinDisplay from './MannequinDisplay'
import CategoryCarousel from './CategoryCarousel'

function GridIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="2" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <rect x="10" y="2" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <rect x="2" y="10" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <rect x="10" y="10" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

export default function OutfitView({ clothes, selected, setSelected, onBrowse }) {
  const { tops, bottoms, shoes } = clothes

  const topUrl = tops[selected.top]?.url
  const bottomUrl = bottoms[selected.bottom]?.url
  const shoeUrl = shoes[selected.shoe]?.url

  function setTop(i) { setSelected(s => ({ ...s, top: i })) }
  function setBottom(i) { setSelected(s => ({ ...s, bottom: i })) }
  function setShoe(i) { setSelected(s => ({ ...s, shoe: i })) }

  return (
    <div className="flex flex-col h-screen max-h-screen">

      {/* Header */}
      <header className="flex items-center justify-between px-6 pt-8 pb-4 shrink-0">
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-stone-400 mb-0.5">My</p>
          <h1 className="text-xl font-light tracking-[0.12em] text-stone-800">Wardrobe</h1>
        </div>
        <button
          onClick={() => onBrowse('tops')}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-stone-800 transition-all text-[11px] uppercase tracking-widest font-medium"
        >
          <GridIcon />
          Browse
        </button>
      </header>

      {/* Mannequin */}
      <div className="flex-1 flex items-center justify-center min-h-0 py-2">
        <div className="flex flex-col items-center gap-3">
          <MannequinDisplay topUrl={topUrl} bottomUrl={bottomUrl} shoeUrl={shoeUrl} />

          {/* Outfit name / selected item names */}
          <div className="flex gap-4 text-[10px] uppercase tracking-widest text-stone-400 mt-1">
            <span>{tops[selected.top]?.name || '—'}</span>
            <span className="text-stone-200">·</span>
            <span>{bottoms[selected.bottom]?.name || '—'}</span>
            <span className="text-stone-200">·</span>
            <span>{shoes[selected.shoe]?.name || '—'}</span>
          </div>
        </div>
      </div>

      {/* Category carousels */}
      <div className="shrink-0 bg-white border-t border-stone-100 rounded-t-3xl shadow-[0_-4px_24px_rgba(0,0,0,0.04)]">
        <div className="w-10 h-1 bg-stone-200 rounded-full mx-auto mt-3 mb-1" />

        <CategoryCarousel
          label="Tops"
          items={tops}
          selectedIndex={selected.top}
          onSelect={setTop}
          onLabelClick={() => onBrowse('tops')}
        />

        <div className="mx-4 border-t border-stone-50" />

        <CategoryCarousel
          label="Bottoms"
          items={bottoms}
          selectedIndex={selected.bottom}
          onSelect={setBottom}
          onLabelClick={() => onBrowse('bottoms')}
        />

        <div className="mx-4 border-t border-stone-50" />

        <CategoryCarousel
          label="Shoes"
          items={shoes}
          selectedIndex={selected.shoe}
          onSelect={setShoe}
          onLabelClick={() => onBrowse('shoes')}
        />

        <div className="pb-safe pb-4" />
      </div>
    </div>
  )
}
