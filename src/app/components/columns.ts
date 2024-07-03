import { EditCell } from './EditCell'
import { TableCell } from './tableCell'
// const columnHelper = createColumnHelper<Folgas>()

export const columns = [
  {
    accessorKey: 'id',
    header: 'ID',
    meta: {
      type: 'number',
    },
  },
  {
    accessorKey: 'datai',
    header: 'Data Inicial',
    cell: TableCell,
    meta: {
      type: 'date',
    },
  },
  {
    accessorKey: 'dataf',
    header: 'Data Final',
    cell: TableCell,
    meta: {
      type: 'date',
    },
  },
  {
    accessorKey: 'saldo',
    header: 'Saldo',
    cell: TableCell,
    meta: {
      type: 'text',
    },
  },
  {
    accessorKey: 'apto',
    header: 'Apto   ?   ',
    cell: TableCell,
    meta: {
      type: 'select',
      options: [
        { value: 'true', label: 'Sim' },
        { value: 'false', label: 'Não' },
      ],
    },
  },
  {
    accessorKey: 'prescrito',
    header: 'Prescrito',
    cell: TableCell,
    meta: {
      type: 'select',
      options: [
        { value: 'true', label: 'Sim' },
        { value: 'false', label: 'Não' },
      ],
    },
  },
  {
    header: 'Opções',
    id: 'edit',
    cell: EditCell,
  },
]
