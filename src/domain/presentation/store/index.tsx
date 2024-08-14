import {ICatalogs, IProduct } from "@/domain/entities/products";
import { atom } from "jotai";


export const counter = atom(0);

export const detail = atom<IProduct | null>(null)

export const favorites = atom<ICatalogs>([]);

export const carts = atom<ICatalogs>([]);