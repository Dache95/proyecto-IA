import { writable } from "svelte/store";
import { ImageStates } from "./types.d";

export const imageState = writable(ImageStates.READY);
export const originalImage = writable(null);
export const processedImage = writable(null);