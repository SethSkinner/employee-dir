import React, { useState } from "react";
import { useTable, useSortBy, useFilters } from "react-table";
import "./style.css"

export default function Table({ columns, data }) {

    const [filterNameInput, setFilterNameInput] = useState('');
    const [filterOccupationInput, setFilterOccupationInput] = useState('');
    const [filterDepartmentInput, setFilterDepartmentInput] = useState('');

        const {

            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow,
            setFilter

        } = useTable (

            {

                columns,
                data

            },

            useFilters,
            useSortBy

        );

            const handleFilterChangeName = event => {

                const value = event.target.value || undefined;
                setFilter('name', value);
                setFilterNameInput(value);

            };

            const handleFilterChangeOccupation = event => {

                const value = event.target.value || undefined;
                setFilter('occupation', value);
                setFilterOccupationInput(value);

            };

            const handleFilterChangeDepartment = event => {

                const value = event.target.value || undefined;
                setFilter('department', value);
                setFilterDepartmentInput(value);

            };

            return (

                <React.Fragment>

                    <div className='search'>

                        <input placeholder={'input name here'} value={filterNameInput} onChange= {handleFilterChangeName}/>
                        <input placeholder={'input occupation here'} value={filterOccupationInput} onChange= {handleFilterChangeOccupation}/>
                        <input placeholder={'input department here'} value={filterDepartmentInput} onChange= {handleFilterChangeDepartment}/>

                    </div>

                    <table {...getTableProps()}>

                        <thead>
                            {headerGroups.map(headerGroup => (

                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())}
                                            
                                            className={
                                                column.isSorted ? column.isSortedDesc ? "sort-desc" : "sort-asc" : "" }>

                                               {column.render("Header")} 

                                            </th>

                                    ))}

                                </tr>

                            ))}

                        </thead>

                        <tbody {...getTableBodyProps()}>
                            {rows.map((row, i) => {

                                prepareRow(row);
                                    return(

                                        <tr {...row.getRowProps()}>
                                            {row.cells.map(cell => {

                                                return(

                                                    <td {...cell.getCellProps()}>
                                                        {cell.render("Cell")}
                                                    </td>

                                                );

                                            })}
                                        </tr>

                                    );

                            })}
                        </tbody>

                    </table>
                </React.Fragment>
            );

} 