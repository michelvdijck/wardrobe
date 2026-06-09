export default function MannequinDisplay({ topUrl, bottomUrl, shoeUrl }) {
  return (
    <div className="relative mx-auto" style={{ width: 200, height: 500 }}>

      {/* Body fill */}
      <svg viewBox="0 0 200 500" width="200" height="500" className="absolute inset-0" aria-hidden="true">
        <ellipse cx="100" cy="26" rx="22" ry="24" fill="#E6E3DE" />
        <rect x="93" y="49" width="14" height="18" rx="5" fill="#E6E3DE" />
        {/* Torso — hourglass: chest widens to ~120px, waist narrows to ~92px */}
        <path d="M46 66 Q65 59 100 59 Q135 59 154 66 Q163 85 160 122 Q154 168 146 190 Q124 201 100 202 Q76 201 54 190 Q46 168 40 122 Q37 85 46 66 Z" fill="#E6E3DE" />
        <path d="M46 70 L28 90 Q16 150 18 214 L30 212 Q28 156 42 100 Z" fill="#E6E3DE" />
        <path d="M154 70 L172 90 Q184 150 182 214 L170 212 Q172 156 158 100 Z" fill="#E6E3DE" />
        {/* Hips — wider flare than shoulders */}
        <path d="M54 190 Q76 201 100 202 Q124 201 146 190 L164 240 Q128 250 100 251 Q72 250 36 240 Z" fill="#E6E3DE" />
        <path d="M36 240 L56 240 L58 462 L34 462 Z" fill="#E6E3DE" />
        <path d="M144 240 L164 240 L166 462 L142 462 Z" fill="#E6E3DE" />
        <ellipse cx="46" cy="470" rx="26" ry="11" fill="#E6E3DE" />
        <ellipse cx="154" cy="470" rx="26" ry="11" fill="#E6E3DE" />
      </svg>

      {/* Top — full upper body width, shoulder to waist */}
      <div className="absolute clothing-overlay pointer-events-none" style={{ top: 52, left: 4, width: 192, height: 145 }}>
        {topUrl ? (
          <img src={topUrl} alt="top" className="w-full h-full object-contain" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-[9px] uppercase tracking-[0.2em] text-stone-300">Top</span>
          </div>
        )}
      </div>

      {/* Bottom — waistband to mid-thigh */}
      <div className="absolute clothing-overlay pointer-events-none" style={{ top: 184, left: 20, width: 160, height: 145 }}>
        {bottomUrl ? (
          <img src={bottomUrl} alt="bottom" className="w-full h-full object-contain" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-[9px] uppercase tracking-[0.2em] text-stone-300">Bottom</span>
          </div>
        )}
      </div>

      {/* Left shoe — toe faces left (mirrored) */}
      <div className="absolute clothing-overlay pointer-events-none" style={{ top: 422, left: 0, width: 98, height: 74, transform: 'scaleX(-1)' }}>
        {shoeUrl ? (
          <img src={shoeUrl} alt="left shoe" className="w-full h-full object-contain object-bottom" />
        ) : (
          <div className="w-full h-full flex items-end justify-center pb-1">
            <span className="text-[9px] uppercase tracking-[0.2em] text-stone-300">Shoes</span>
          </div>
        )}
      </div>

      {/* Right shoe — toe faces right */}
      <div className="absolute clothing-overlay pointer-events-none" style={{ top: 422, left: 102, width: 98, height: 74 }}>
        {shoeUrl ? (
          <img src={shoeUrl} alt="right shoe" className="w-full h-full object-contain object-bottom" />
        ) : null}
      </div>

      {/* Mannequin outline — sits on top */}
      <svg
        viewBox="0 0 200 500"
        width="200"
        height="500"
        className="absolute inset-0 pointer-events-none"
        fill="none"
        stroke="#C4BFB9"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <ellipse cx="100" cy="26" rx="22" ry="24" />
        <path d="M93 49 L93 66 M107 49 L107 66" />
        <path d="M46 66 Q65 59 100 59 Q135 59 154 66" />
        <path d="M46 66 L28 90" />
        <path d="M154 66 L172 90" />
        <path d="M28 90 Q16 150 18 214 L30 212 Q28 156 42 100" />
        <path d="M172 90 Q184 150 182 214 L170 212 Q172 156 158 100" />
        {/* Torso sides — curve out at chest, in at waist */}
        <path d="M42 100 Q36 130 40 160 Q46 176 54 190" />
        <path d="M158 100 Q164 130 160 160 Q154 176 146 190" />
        <path d="M54 190 Q76 201 100 202 Q124 201 146 190" />
        {/* Hip flare — wider than shoulders */}
        <path d="M54 190 Q44 214 36 240" />
        <path d="M146 190 Q156 214 164 240" />
        <path d="M36 240 Q72 250 100 251 Q128 250 164 240" />
        <path d="M36 240 L34 462 M56 240 L58 462" />
        <path d="M34 462 Q24 462 20 470 Q18 480 36 482 L58 482 Q72 480 72 470 Q70 462 58 462" />
        <path d="M144 240 L142 462 M164 240 L166 462" />
        <path d="M166 462 Q176 462 180 470 Q182 480 164 482 L142 482 Q128 480 128 470 Q130 462 142 462" />
      </svg>
    </div>
  )
}
