import { Column, Row, Table } from '@tanstack/react-table'
import React, { useState, ChangeEvent, useEffect } from 'react'
import { Folgas } from './data'

type Option = {
  label: string
  value: string
}

// type ColumnType = {
//   id: string
//   columnDef: {
//     meta?: {
//       type?: string
//       options?: Option[]
//     }
//   }
// }


// type RowType = {
//   index: number
//   id: string
// }

// type TableType = {
//   id: number
//   options: {
//     meta?: {
//       editedRows: Record<string, boolean>
//       updateData: (index: number, columnId: string, value: unknown) => void
//       // Other relevant properties/methods
//     }
//   }
// }

export const TableCell = ({
  row,
  table,
  getValue,
  column,
}: {
  row:any
  table: any
  column: any
  getValue: any
}) => {
  const initialValue = getValue()
  const columnMeta = column.columnDef.meta
  const tableMeta = table.options.meta
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  const onBlur = () => {
    tableMeta?.updateData(row.index, column.id, value)
  }

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value)
    tableMeta?.updateData(row.index, column.id, e.target.value)
  }

  if (tableMeta?.editedRows[row.id]) {
    return columnMeta?.type === 'select' ? (
      <select
        className="rounded border border-solid border-[#ccc] p-[5px]"
        onChange={onSelectChange}
        value={value}
      >
        {columnMeta?.options?.map((option: Option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    ) : (
      <input
        className="rounded border border-solid border-[#ccc] p-[5px]"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
        type={columnMeta?.type || 'text'}
      />
    )
  }

  return <span>{value}</span>
}
