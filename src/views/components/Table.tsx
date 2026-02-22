import './Table.css';

/**
 * @param classname an optional CSS class name to apply to the table element
 * @param headers a list of headers for the table
 * @param rows a list of rows, where each row is a list of cell values corresponding to the headers
 */
export interface TableProps {
    classname?: string;
    headers: string[];
    rows: string[][];
}

/**
 * Creates a table element with the given headers and rows.
 */
export function Table({headers, rows, classname} : TableProps) {
    return (
        <div className="table-container">
            <table className={classname}>
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}