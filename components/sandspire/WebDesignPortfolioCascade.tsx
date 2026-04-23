"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  images: string[];
  className?: string;
  /** Number of marquee rows (default 3). */
  rows?: number;
  /** Cap tiles per row so each band is shorter / taller visually (default 2). */
  maxPerRow?: number;
  pauseOnHover?: boolean;
};

const TILE_W = 352;
const TILE_H = 248;

/**
 * 3D Marquee — horizontal scrolling rows with strong isometric tilt.
 */
export function WebDesignPortfolioCascade({
  images,
  className,
  rows = 3,
  maxPerRow = 2,
  pauseOnHover = true,
}: Props) {
  const rowArraysRaw: string[][] = Array.from({ length: rows }, (_, rowIdx) =>
    images.filter((_, i) => i % rows === rowIdx),
  );
  const rowArrays = rowArraysRaw.map((row) => row.slice(0, maxPerRow));

  const rowsEl = (
    <div
      style={{
        transform: "rotateX(32deg) rotateY(-10deg) rotateZ(-10deg)",
        transformStyle: "preserve-3d",
      }}
      className="flex w-max flex-col gap-6 py-2"
    >
      {rowArrays.map((rowImages, rowIdx) => {
        const reverse = rowIdx % 2 === 1;
        const loopImages = [...rowImages, ...rowImages, ...rowImages];

        return (
          <div
            key={rowIdx}
            className={cn(
              "flex w-max flex-shrink-0 gap-6",
              pauseOnHover && "hover:[animation-play-state:paused]",
              reverse ? "animate-marquee-reverse" : "animate-marquee",
            )}
          >
            {loopImages.map((src, i) => (
              <div
                key={`${src}-${i}`}
                className="box-border flex-shrink-0 overflow-hidden rounded-xl border-[3px] border-solid border-white/25 shadow-[0_8px_22px_rgba(0,0,0,0.38),0_3px_8px_rgba(0,0,0,0.22)]"
                style={{ width: TILE_W, height: TILE_H }}
              >
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );

  return (
    <div
      className={cn("relative h-full min-h-0 w-full overflow-hidden", className)}
      style={{
        perspective: "600px",
        perspectiveOrigin: "15% 50%",
      }}
    >
      <div
        className="absolute overflow-hidden"
        style={{
          top: "-20%",
          bottom: "-20%",
          left: "20%",
          right: "-15%",
        }}
      >
        <div
          className="flex h-full w-full items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div style={{ transform: "scale(1.08)", transformStyle: "preserve-3d" }}>{rowsEl}</div>
        </div>
      </div>
    </div>
  );
}
