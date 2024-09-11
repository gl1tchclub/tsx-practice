import { useState, useEffect } from "react";

const MultiplicationMatrix = () => {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);

  const [matrix, setMatrix] = useState<number[][]>([]);

  const handleRowsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRows(Number(e));
  };

  return (
    <>
      <div>
        <label>
          Rows:
          <input type="number" value={rows} onChange={handleRowsChange} />
        </label>
      </div>
      <div></div>
    </>
  );
};

export default MultiplicationMatrix;
