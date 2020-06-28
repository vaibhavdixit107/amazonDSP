import React, { useState, useReducer, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useRoutes from '../services/useRoutes'
// import { Markup } from 'interweave'
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import MaterialTable from 'material-table';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Topbar from '../components/topbar'

const useRowStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
    button: {
        display: 'flex',
        margin: theme.spacing(2,1,0,'auto'),
      },
      title: {
        flex: '1 1 100%',
      },
      table:{
        width:'70%' ,
        marginLeft:'15%', 
        marginRight:'15%',
      },
      td: {
        background: 'red'
      }

      
  }));


  const RescueAdvice = () => {

    const [state, setState] = React.useState({
        columnsFICOException: [
            { title: 'Name', field: 'name' },
            { title: 'Previous Day FICO', field: 'FICOResult'},
            { title: 'Acceleration', field: 'acceleration' },
            { title: 'Braking', field: 'braking' },
        ],
        data:[
            { name: 'Mehmet', FICOResult: 'Baran', acceleration: 1987, braking: 63 },
            { name: 'Zerya Betül', FICOResult: 'Baran', acceleration: 2017, braking: 34 },
        ]
    })
    const classes = useRowStyles();
return(
    <div>
  <Topbar />
<MaterialTable
            // style={{boxShadow: '0px 0px'}}
            title="Driver Need Rescue"
            columns={state.columnsFICOException}
            data={state.data}
            
            onRowClick={(event, rowData, toggleDetailPanel) => {
              console.log('row data', rowData)
            
            }}

            // actions={[
            //   {
                
            //     icon: 'save',
            //     tooltip: 'Done button',
            //     onClick: (event, rowData) => {
            //       // Do save operation
            //     },
            //     // isFreeAction: true
                
            //   }
            // ]}
            // options={{
            //   actionsColumnIndex: -1
            // }}

            //   detailPanel={[
            //     {
            //       tooltip: 'Show Name',
            //       render: rowData => {
            //         return (
            //             <NoDataComponent id={rowData.driverId} />
                   
            //         )
            //       },
            //     },
                
            //   ]}
            
           
          />

<MaterialTable
            // style={{boxShadow: '0px 0px'}}
            title="Potential Rescue Driver"
            columns={state.columnsFICOException}
            data={state.data}
            onRowClick={(event, rowData, toggleDetailPanel) => {
              console.log('row data', rowData)
            
            }}
            
            onChangeRowsPerPage={console.log('jkjfkd')}
            onChangePage={console.log('jkjfkd')}
          />   
          </div>         

          
)
  }

  export default RescueAdvice