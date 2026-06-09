import { useRef, useState } from 'react'

function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function CategoryCarousel({ label, items, selectedIndex, onSelect, onLabelClick }) {
  const trackRef = useRef(null)
  const [dragStart, setDragStart] = useState(null)

  const ITEM_W = 80
  const ITEM_GAP = 10
  const STEP = ITEM_W + ITEM_GAP

  const isEmpty = items.length === 0

  function prev() {
    onSelect((selectedIndex - 1 + Math.max(items.length, 1)) % Math.max(items.length, 1))
  }

  function next() {
    onSelect((selectedIndex + 1) % Math.max(items.length, 1))
  }

  // Touch / mouse swipe
  function onPointerDown(e) {
    setDragStart(e.clientX ?? e.touches?.[0]?.clientX)
  }

  function onPointerUp(e) {
    if (dragStart === null) return
    const end = e.clientX ?? e.changedTouches?.[0]?.clientX
    const delta = end - dragStart
    if (Math.abs(delta) > 40) {
      delta < 0 ? next() : prev()
    }
    setDragStart(null)
  }

  return (
    <div className="flex items-center gap-3 py-3 px-4">
      {/* Label */}
      <button
        onClick={onLabelClick}
        className="w-16 text-left shrink-0 group"
      >
        <span className="text-[10px] uppercase tracking-[0.18em] font-medium text-stone-500 group-hover:text-stone-800 transition-colors">
          {label}
        </span>
      </button>

      {/* Prev button */}
      <button
        onClick={prev}
        disabled={isEmpty}
        className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-all disabled:opacity-20"
        aria-label="Previous"
      >
        <ChevronLeft />
      </button>

      {/* Item strip */}
      <div
        ref={trackRef}
        className="flex-1 overflow-hidden"
        onMouseDown={onPointerDown}
        onMouseUp={onPointerUp}
        onTouchStart={onPointerDown}
        onTouchEnd={onPointerUp}
      >
        {isEmpty ? (
          <div
            className="h-20 flex items-center justify-center rounded-xl border border-dashed border-stone-200"
            style={{ width: ITEM_W * 3 + ITEM_GAP * 2 }}
          >
            <span className="text-[10px] uppercase tracking-widest text-stone-300">No items</span>
          </div>
        ) : (
          <div
            className="flex gap-[10px] transition-transform duration-300 ease-out cursor-grab active:cursor-grabbing"
            style={{
              transform: `translateX(-${selectedIndex * STEP}px)`,
            }}
          >
            {items.map((item, i) => (
              <button
                key={item.id}
                onClick={() => onSelect(i)}
                className={`shrink-0 rounded-xl overflow-hidden transition-all duration-200 ${
                  i === selectedIndex
                    ? 'ring-2 ring-stone-700 ring-offset-2 ring-offset-stone-50'
                    : 'ring-1 ring-stone-200 opacity-60 hover:opacity-90 hover:ring-stone-300'
                }`}
                style={{ width: ITEM_W, height: ITEM_W }}
              >
                <img
                  src={item.url}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Next button */}
      <button
        onClick={next}
        disabled={isEmpty}
        className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-all disabled:opacity-20"
        aria-label="Next"
      >
        <ChevronRight />
      </button>

      {/* Count badge */}
      <span className="shrink-0 w-10 text-right text-[11px] text-stone-400 tabular-nums">
        {isEmpty ? '—' : `${selectedIndex + 1}/${items.length}`}
      </span>
    </div>
  )
}
