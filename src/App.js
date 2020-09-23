import React, { useState, useEffect, useMemo, } from "react";
import Card from "./components/Card";
import Title from "./components/Title";
import Table from "./components/Table";
import Employee from "./employee.json";

const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => {

    const data = Employee;
      setData(data);

  },
  
    []);

  const columns = useMemo(

    () => 

      [

        {

          Header: 'Employee',
          columns: 
          [

            {

              Header: 'Profile Picture',
              accessor: 'image',
              Cell: ({ cell: { value } }) => <Card employee={value}/>

            },

            {

              Header: 'Name',
              accessor: 'name'

            }

          ]

        },

        {

          Header:'Details',
          columns: 
          [

            {

              Header: 'Occupation',
              accessor: 'occupation'

            },

            {

              Header: 'Department',
              accessor: 'department',

            },

          ]

        }

      ],

      []

  );

      return (

        <div className='App'>
          <Title>Employee Directory</Title>
            <Table
              columns={columns}
              data={data}
              setTable={setData}
            />
        </div>

      );

}

export default App;
