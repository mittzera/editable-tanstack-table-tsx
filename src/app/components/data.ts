export type Folgas = {
  id: number
  saldo: string
  datai: string
  apto: boolean
  dataf: string
  prescrito: boolean
  option?: string
}

export const data: Folgas[] = [
  {
    id: 1,
    saldo: '2',
    datai: '1984-01-04',
    dataf: '1984-01-04',
    apto: true,
    prescrito: false,
  },
  {
    id: 1,
    saldo: '3',
    datai: '1961-05-10',
    dataf: '1984-01-04',
    apto: false,
    prescrito: true,
  },
  {
    id: 1,
    saldo: '2',
    datai: '1991-10-12',
    dataf: '1984-01-04',
    apto: true,
    prescrito: false,
  },
  {
    id: 1,
    saldo: '4',
    datai: '1978-09-24',
    dataf: '1984-01-04',
    apto: false,
    prescrito: true,
  },
]
