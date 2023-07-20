import { useStorageLocal } from '@/composables/useStorageLocal'
import type Subject from '@/interfaces/Subject'

export const storageDemo = useStorageLocal('webext-demo', 'Storage Demo')

export const storageSchedule = useStorageLocal<Subject[]>('subject', [])
