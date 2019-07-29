export type callback<T extends {}> = (error: any, value: T | null) => void;
