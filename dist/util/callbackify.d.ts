import { callback } from "./callback";
export default function <T>(promise: Promise<T>, cb?: callback<T>): void;
