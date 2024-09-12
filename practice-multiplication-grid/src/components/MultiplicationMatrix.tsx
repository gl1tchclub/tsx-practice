import { useState, useEffect } from "react";

const MultiplicationMatrix = () => {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);

  const [matrix, setMatrix] = useState<number[][]>([]);

  const handleRowsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRows(Number(e.target.value));
  };

  const handleColumnsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColumns(Number(e.target.value));
  };

  const generateMatrix = () => {
    const newMatrix: number[][] = [];

    for (let i = 1; i <= rows; i++) {
      const row: number[] = [];
      for (let j = 1; j <= columns; j++) {
        row.push(i * j);
      }
      newMatrix.push(row);
    }
    setMatrix(newMatrix);
  };

  return (
    <>
      <div>
        <label>
          Rows:
          <input type="number" value={rows} onChange={handleRowsChange} />
        </label>
      </div>
      <div>
        <label>
          Columns:
          <input type="number" value={columns} onChange={handleColumnsChange} />
        </label>
      </div>
      <button
        onClick={generateMatrix}
        className="m-4 p-2 rounded-lg bg-orange-300"
      >
        Generate Matrix
      </button>
      {matrix.length > 0 && (
        <table>
          <tbody key={matrix.length}>
            {/* {matrix.map((arr, arrIdx) => (
              <tr key={arrIdx} className="border-solid border-2">
              {arr.map((col, colIdx) => (
                <td key={colIdx} className="p-2 border-solid border-2"> {colIdx}</td>
                ))}
                </tr>
                ))} */}
            {matrix.map((row, rowIdx) => (
              <tr key={rowIdx} className="flex h-12">
                <p className="w-20 p-2 bg-green-100">{rowIdx + 1}x</p>
                {row.map((cell, cellIdx) => (
                  <td
                    key={cellIdx}
                    className="w-24 items-center flex justify-center border-solid border-2"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default MultiplicationMatrix;
