import { useStorageLocal } from '@/composables/useStorageLocal'

interface SubjectColor {
  primary: string
  secondary: string
  tertiary: string
}

export const defaultSubjectColors: SubjectColor[] = [
  {
    primary: '#0369a1',
    secondary: '#3290c2',
    tertiary: '#e7f6fd',
  },
  {
    primary: '#874de0',
    secondary: '#874de0',
    tertiary: '#f4efff',
  },
  {
    primary: '#2f9074',
    secondary: '#2f9074',
    tertiary: '#e8f8f3',
  },
  {
    primary: '#71160d',
    secondary: '#71160d',
    tertiary: '#ffeff0',
  },
  {
    primary: '#b45309',
    secondary: '#b45309',
    tertiary: '#fef6e7',
  },
  {
    primary: '#73347f',
    secondary: '#73347f',
    tertiary: '#fdf3ff',
  },
  {
    primary: '#ab2f64',
    secondary: '#ab2f64',
    tertiary: '#fff3f8',
  },
  {
    primary: '#0095c2',
    secondary: '#0095c2',
    tertiary: '#f1faff',
  },
  {
    primary: '#65c18c',
    secondary: '#65c18c',
    tertiary: '#c3e9d3',
  },
  {
    primary: '#874de0',
    secondary: '#874de0',
    tertiary: '#f4efff',
  },
  {
    primary: '#874de0',
    secondary: '#874de0',
    tertiary: '#f4efff',
  },
  {
    primary: '#874de0',
    secondary: '#874de0',
    tertiary: '#f4efff',
  },
]

export const storageSubjectColor = useStorageLocal<SubjectColor[]>('subject-color', defaultSubjectColors)
