import React from 'react';
import './style.css';

const Table = (props) => {
    return (
        <table className="table table-sortable text-center">
            <thead>
                <tr>
                    <th scope="col">
                        <span>Image</span>
                    </th>

                    <th scope="col"
                        date-field="name"
                        data-sortable="true">
                        <span onClick={() => props.sortBy("name", "last", "first")}>Name</span>
                    </th>

                    <th scope="col">
                        <span onClick={() => props.sortBy("email")}>Phone Number</span>
                    </th>

                    <th scope="col">
                        <span onClick={() => props.sortBy("email")}>Email</span>
                    </th>

                    <th scope="col">
                        <span onClick={() => props.sortBy("dob", "date")}>Date of Birth</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {props.state.filteredResults.map((result) => {
                    // console.log(result.name);
                    const firstName = result.name.first;
                    const lastName = result.name.last;
                    const nameString = `${firstName} ${lastName}`
                    const dob = props.formatDate(result.dob.date);
                    return (
                        <tr key={result.login.uuid}>
                             <td>
                                <img src={result.picture.thumbnail} alt={nameString} />
                            </td>

                            <td className="align-middle">
                                {nameString}
                            </td>
                           
                            <td className="align-middle">
                                <a href={`tel:+1${result.phone}`}>{result.phone}</a>
                            </td>

                            <td className="align-middle email">
                                <a href={`mailto:${result.email}`}>{result.email}</a>
                            </td>

                            <td className="align-middle">{dob}
                            </td>
                        </tr>
                    )
                })}
            </tbody>



        </table>
    )
}

export default Table;