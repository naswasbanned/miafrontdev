import { Icon } from "../icon/Icon";

/** items: [pertanyaan, jawaban]. Native <details>, bisa dibuka dengan keyboard tanpa JS. */
export function Accordion({
  items,
  openFirst,
}: {
  items: readonly (readonly [q: string, a: string])[];
  openFirst?: boolean;
}) {
  return (
    <>
      {/* Petunjuk cukup sekali per halaman: hanya di daftar yang membuka pertanyaan pertama. */}
      {openFirst && items.length > 1 && (
        <p>Ketuk pertanyaan untuk melihat jawabannya.</p>
      )}
      <div className="accordion">
        {items.map(([q, a], i) => (
          <details
            key={q}
            className="accordion__item"
            open={openFirst && i === 0 ? true : undefined}
          >
            <summary className="accordion__summary">
              {q}
              <Icon name="chevron-down" className="icon accordion__icon" />
            </summary>
            <div className="accordion__panel">
              <p>{a}</p>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}
