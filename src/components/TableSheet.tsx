import React from "react";
import { useTable } from "react-table";

const TableSheet: React.FC<{
  columns: any;
  data: any;
  handleNoticeNumber: any;
}> = ({ columns, data, handleNoticeNumber }): JSX.Element => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, index) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={index}>
            {headerGroup.headers.map((column, index) => (
              <th
                {...column.getHeaderProps()}
                key={index}
                className="text-left align-top p-2"
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={index}>
              {row.cells.map((cell, idx) => (
                <td
                  {...cell.getCellProps()}
                  key={idx}
                  className="text-left align-top p-2"
                  onClick={() => handleNoticeNumber(index)}
                >
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableSheet;
