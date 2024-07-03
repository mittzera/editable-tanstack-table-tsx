import React, { MouseEvent } from 'react'



export const EditCell = ({
  row,
  table,
}: {
  row: any
  table: any
}) => {
  const meta = table.options.meta

  const setEditedRows = (e: MouseEvent<HTMLButtonElement>) => {
    const elName = e.currentTarget.name
    meta?.setEditedRows((old: []) => ({
      ...old,
      [row.id]: !old[row.id],
    }))
    if (elName !== 'edit') {
      meta?.revertData(row.index, e.currentTarget.name === 'cancel')
    }
  }

  return (
    <div className="edit-cell-container">
      {meta?.editedRows[row.id] ? (
        <div className="flex gap-[5px]">
          <button
            onClick={setEditedRows}
            name="done"
            className="mr-2 cursor-pointer rounded bg-green-500 px-4 py-2 text-white"
          >
            Aceitar
          </button>{' '}
          <button
            onClick={setEditedRows}
            name="cancel"
            className="mr-2 cursor-pointer rounded bg-red-500 px-4 py-2 text-white"
          >
            Cancelar
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={setEditedRows}
            name="edit"
            className="mr-2 cursor-pointer rounded bg-green-500 px-4 py-2 text-white"
          >
            Editar
          </button>
          <button
            onClick={setEditedRows}
            name="edit"
            className="cursor-pointer rounded bg-red-500 px-4 py-2 text-white"
          >
            Excluir
          </button>
        </div>
      )}
    </div>
  )
}
