import { useStorageLocal } from '@/composables/useStorageLocal'
import type Subject from '@/interfaces/Subject'

export const storageSchedule = useStorageLocal<Subject[]>('subject', [])
