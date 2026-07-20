"use client";

import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useState } from "react";
import { proofSliderItems } from "../lib/proof-slider-data";

type ProofSliderProps = {
  id?: string;
};

export function ProofSlider({ id = "arsip-bukti" }: ProofSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = proofSliderItems[activeIndex]!;

  function showPrevious() {
    setActiveIndex((current) =>
      current === 0 ? proofSliderItems.length - 1 : current - 1,
    );
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % proofSliderItems.length);
  }

  return (
    <section className="proof-slider-section" id={id} aria-label="Arsip bukti pelanggan">
      <div className="proof-slider-heading">
        <div>
          <p className="eyebrow eyebrow-dark">ARSIP BUKTI PELANGGAN</p>
          <h2>Lihat bukti satu per satu, tanpa dipotong.</h2>
        </div>
        <p>
          Setiap item ditampilkan sesuai konteks aslinya. Bukti DTF, jersey,
          kaos polos, dan event tidak kami samakan menjadi satu klaim.
        </p>
      </div>

      <div className="proof-slider" aria-live="polite">
        <div className="proof-slider-stage">
          <img src={activeItem.image} alt={activeItem.alt} width="1170" height="1600" />
          <a
            className="proof-slider-expand"
            href={activeItem.image}
            target="_blank"
            rel="noreferrer"
            title="Buka bukti ukuran penuh"
            aria-label="Buka bukti ukuran penuh"
          >
            <Maximize2 size={20} aria-hidden="true" />
          </a>
        </div>

        <div className="proof-slider-caption">
          <p className="eyebrow eyebrow-dark">{activeItem.label}</p>
          <h3>{activeItem.title}</h3>
          <p>{activeItem.context}</p>
          <span>
            Bukti {activeIndex + 1} dari {proofSliderItems.length}
          </span>
        </div>

        <div className="proof-slider-controls">
          <button type="button" onClick={showPrevious} aria-label="Bukti sebelumnya" title="Bukti sebelumnya">
            <ChevronLeft size={22} aria-hidden="true" />
          </button>
          <div className="proof-slider-dots" aria-label="Pilih bukti">
            {proofSliderItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Tampilkan bukti ${index + 1}: ${item.title}`}
                aria-current={index === activeIndex ? "true" : undefined}
                title={`Bukti ${index + 1}`}
              />
            ))}
          </div>
          <button type="button" onClick={showNext} aria-label="Bukti berikutnya" title="Bukti berikutnya">
            <ChevronRight size={22} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
