import { Entity } from "../interfaces/common";

export type ApiResponse<T extends Entity> =
    | { status: 'success', data: T[] }
    | { status: 'error', message: string}