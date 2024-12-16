import type { Data } from "@/types";

export const routes = [
  {
    id: 1,
    name: "San Vicente",
    returning: false,
  },
  {
    id: 2,
    name: "San Juan",
    returning: false,
  },
  {
    id: 3,
    name: "Riu Nuevo",
    returning: true,
  },
  {
    id: 4,
    name: "Valle Dorado",
    returning: true,
  },
];

export const quantityToReload = [
  {
    prefix: "$",
    amount: 20,
    currency: "MXN",
  },
  {
    prefix: "$",
    amount: 30,
    currency: "MXN",
  },
  {
    prefix: "$",
    amount: 50,
    currency: "MXN",
  },
  {
    prefix: "$",
    amount: 100,
    currency: "MXN",
  },
  {
    prefix: "$",
    amount: 200,
    currency: "MXN",
  },
  {
    prefix: "$",
    amount: 300,
    currency: "MXN",
  },
  {
    prefix: "$",
    amount: 400,
    currency: "MXN",
  },
  {
    prefix: "$",
    amount: 500,
    currency: "MXN",
  },
];

export const cardTypes: Data[] = [
  {
    name: "Fundador",
    value: "f",
  },
  {
    name: "Usuario",
    value: "u",
  },
  {
    name: "Estudiante",
    value: "",
  },
  {
    name: "3ra edad",
    value: "3ra",
  },
];

export const routeLocations = [
  {
    id: 1,
    name: "San Vicente",
    returning: false,
    location: { lat: 19.432608, lng: -99.133209 }, // Coordenadas de San Vicente
  },
  {
    id: 2,
    name: "San Juan",
    returning: false,
    location: { lat: 20.659698, lng: -103.349609 }, // Coordenadas de San Juan
  },
  {
    id: 3,
    name: "Riu Nuevo",
    returning: true,
    location: { lat: 19.172199, lng: -96.130554 }, // Coordenadas de Riu Nuevo
  },
  {
    id: 4,
    name: "Valle Dorado",
    returning: true,
    location: { lat: 19.512702, lng: -99.235101 }, // Coordenadas de Valle Dorado
  },
];

export const stops = [
  {
    stopId: 1,
    stopName: "Parada 1",
    location: { lat: 19.432608, lng: -99.133209 },
    description: "Parada principal en San Vicente",
  },
  {
    stopId: 2,
    stopName: "Parada 2",
    location: { lat: 19.433609, lng: -99.13421 },
    description: "Parada secundaria en San Vicente",
  },
  {
    stopId: 3,
    stopName: "Parada 3",
    location: { lat: 19.43461, lng: -99.135211 },
    description: "Parada cercana al mercado",
  },
];
