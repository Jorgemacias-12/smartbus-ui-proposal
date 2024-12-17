import { useEffect, useRef } from "react";

import "mapbox-gl/dist/mapbox-gl.css";
import mapbox from "mapbox-gl";

interface Props {
  lat: number;
  lng: number;
}

export const MapView = ({ lat, lng }: Props) => {
  const mapEl = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapEl.current || mapRef.current) {
      return;
    }

    mapRef.current = new mapbox.Map({
      container: mapEl.current,
      style: "mapbox://styles/mapbox/navigation-night-v1",
      pitchWithRotate: false,
      center: [lng, lat] as [number, number],
      zoom: 15,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
      doubleClickZoom: false,
    });

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [lat, lng]);

  return <article className="flex w-full h-full flex-1" ref={mapEl}></article>;
};
