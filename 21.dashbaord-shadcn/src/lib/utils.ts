import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export default function cn (...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
