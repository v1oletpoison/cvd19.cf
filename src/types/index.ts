import { TableInstance } from 'react-table';

export interface Countries {
  countries: Country[];
}

export interface Country {
  name: string
  results?: Result[]
  periods: Period[]
  periodsWithDeaths: Period[]
}

export interface Result {
  date?: string
  deaths?: number
  confirmed?: number
}

export interface Counts {
  deaths: number
  cases: number
}

export interface Periods {
  periods: Period[]
  periodsWithDeaths: Period[]
}

export interface Period {
  endDate: string
  totalDeaths: number
  newDeaths: number
  growthRate: number
  totalCases: number
  newCases: number
  status: OutbreakStatus | undefined
}

export interface PeriodSummary {
  endDate: string
  none: number
  small: number
  losing: number
  flattening: number
  crushing: number
  winning: number
  won: number
  pandemicFree: number
  underControl: number
}

export interface AllPeriodsResult {
  totalGlobalCases: number
  totalGlobalDeaths: number
  totalGlobalRecovered: number
  totalGlobalCountries: number
}

export interface TableTColumn {
  key: string
  title: string
  dataIndex: string
  sorter?: Function
  defaultSortOrder?: string
  sortOrder?: string
  render?: Function
}

export interface TableT {
  table: TableInstance<Country>
}

export enum OutbreakStatus {
  None = 'No Outbreak',
  Small = 'Small Outbreak',
  Losing = 'Losing',
  Flattening = 'Flattening the Curve',
  Crushing = 'Crushing the Curve',
  Winning = 'Winning',
  Won = 'Won'
}

export interface TagT {
  id: string | number;
  name: string;
  disabled?: boolean;
}

export interface Tags {
  currentTags: TagT[]
  suggestedTags: TagT[]
}

export interface PeriodInfo {
  length: number
  value: string
}

export type Table =
  | 'growth'
  | 'totalDeaths'
  | 'newDeaths'
  | 'totalCases'
  | 'newCases';

export interface ChartInfo {
  x: string
  y: string
  title: string
}

export interface RenderedTable {
  table: TableT
  order?: boolean
}

export interface DataChartProps {
  countries: Country[]
  x: string
  y: string
  tags: TagT[]
  startAtDeaths: boolean
}

export interface Selected {
  [key: string]: string
}

export type ValT =
| number | string | undefined;

export interface GlobalData {
  totalGlobalCases: number
  totalGlobalDeaths: number
  totalGlobalRecovered: number
  countriesTotal: number
}

export interface ReducerD {
  totalGlobalCases: number
  totalGlobalDeaths: number
  totalGlobalRecovered: number
}

export interface MissingCountries {
  longName: string
  shortName: string
}
