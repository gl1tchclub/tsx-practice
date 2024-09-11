import { useState, useEffect } from "react";

const MultiplicationMatrix = () => {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);

  const [matrix, setMatrix] = useState<number[][]>([]);

  const handleRowsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRows(Number(e));
  };

  const handleColumnsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColumns(Number(e));
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
    </>
  );
};

export default MultiplicationMatrix;
