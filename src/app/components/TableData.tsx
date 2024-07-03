'use client'

import React, { useState } from 'react'
import { data as defaultData } from './data'

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { columns } from './columns'

export const TableData = () => {
  const [data, setData] = useState(() => [...defaultData])
  const [originalData, setOriginalData] = useState(() => [...defaultData])
  const [editedRows, setEditedRows] = useState({})

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      editedRows,
      setEditedRows,
      revertData: (rowIndex: number, revert: boolean) => {
        if (revert) {
          setData((old) =>
            old.map((row, index) =>
              index === rowIndex ? originalData[rowIndex] : row,
            ),
          )
        } else {
          setOriginalData((old) =>
            old.map((row, index) =>
              index === rowIndex ? data[rowIndex] : row,
            ),
          )
        }
      },
      updateData: (rowIndex: number, columnId: string, value: string) => {
        setData((old) =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex],
                [columnId]: value,
              }
            }
            return row
          }),
        )
      },
    },
  })

  return (
    <article className=" flex justify-center">
      <table className="mx-0 my-[25px] w-full border-collapse text-sm shadow-[0_0_20px_rgba(0,0,0,0.15)]">
        <thead className="px-[15px] py-2.5">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              className="text-#000000 bg-[#ffffff] text-left"
              key={headerGroup.id}
            >
              {headerGroup.headers.map((header) => (
                <th className="px-[15px] py-2.5" key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              className={`border-b border-solid border-b-[#dddddd] last-of-type:border-b-2 last-of-type:border-solid last-of-type:border-b-[#dbdbdb]`}
              key={row.id}
            >
              {row.getVisibleCells().map((cell) => (
                <td className="px-[15px] py-2.5" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* <pre>{JSON.stringify(data, null, "\t")}</pre> */}
    </article>
  )
}
