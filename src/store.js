import { persisted } from 'svelte-persisted-store';

export const list = persisted('asd', Array(100).fill(0));
