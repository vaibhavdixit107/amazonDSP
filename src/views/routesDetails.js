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
      }


  }));





const RoutesDetails = () =>{
    const { fetchRoutesData, fetchPerformanceData } = useRoutes()
    const nonFicoExceptions = useSelector(state => state.response.nonFicoExceptionsByDriver)
    const FicoExceptions = useSelector(state => state.response.ficoExceptionsByDriver)
    const driverPerf = useSelector(state => state.response.driverPerf)
    const dvcrMissing = useSelector(state => state.response.dvcrMissing)
    const classes = useRowStyles();


    const getStyleForSpeeding = (count) => {
      if (count >= 2) {
        return {'backgroundColor':'red','color':'white'}
      } else if (count >= 1) {
        return {'backgroundColor':'#f5c6cb'}
      } else {
        return {'backgroundColor':'#c3e6cb'}
      }
    }

    
    const [state, setState] = React.useState({
        columnsNonFICOException: [
          { title: 'Name', field: 'name' },
          { title: 'Previous Day FICO', field: 'FICOResult'},
          { title: 'Seatbelt', field: 'seatbelt', cellStyle: colData => (getStyleForSpeeding(colData-1))},
          { title: 'Speeding', field: 'speeding', cellStyle: colData => (getStyleForSpeeding(colData))},
          { title: 'Vehicle Tag', field: 'vehicleTag' },
          // { title: 'Action', field: 'action.innerHTML' },
        ],

        columnsDVCRMissing: [
            { title: 'Name', field: 'amazonName' },
          ],

        columnsFICOException: [
            { title: 'Name', field: 'name' },
            { title: 'Previous Day FICO', field: 'FICOResult'},
            { title: 'Acceleration', field: 'acceleration' },
            { title: 'Braking', field: 'braking' },
            { title: 'Cornering', field: 'cornering' },
            { title: 'Backup', field: 'backup' },
            { title: 'Idling', field: 'idling' },
            { title: 'Vehicle Tag', field: 'vehicleTag' },
          ],




    });



    // useEffect(()=>{
    //     fetchRoutesData()

    // },[fetchRoutesData])

    useEffect(()=>{
        fetchPerformanceData()
    },[])


    const handleOnClick = (e) => {
        console.log('Inside on click',e)
    }

    // function Row(props) {
    //     const { row } = props;
    //     const [open, setOpen] = React.useState(false);
    //     const classes = useRowStyles();

    //     let score = ''
    //     let rating = ''

        // Object.keys(driverPerf).map(id => {
        //     if(id === row[0].driverId){
        //         score = driverPerf[id][0].scores.FICO.score
        //         rating  = driverPerf[id][0].scores.FICO.rating
        //     }
        // })
    //     return (
    //       <React.Fragment>
    //         <TableRow className={classes.root} onClick={()=>handleOnClick(row[0].driverId)}>
    //           <TableCell>
    //             <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
    //               {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
    //             </IconButton>

    //           </TableCell>
    //           <TableCell component="th" scope="row">
    //           {row[0].driverName}
    //           </TableCell>
    //           <TableCell align="right">{score && rating !== undefined ? score + ' ' + rating : ''}</TableCell>
    //           <TableCell align="right">{row[0].exceptions}</TableCell>
    //           <TableCell align="right">{row[1].exceptions}</TableCell>
    //           {row[2] !== undefined? <TableCell align="right">{row[2].exceptions}</TableCell>: ''}
    //           {row[3] !== undefined? <TableCell align="right">{row[3].exceptions}</TableCell>: ''}
    //           {row[4] !== undefined? <TableCell align="right">{row[4].exceptions}</TableCell>: ''}
    //           <TableCell align="right">{row[0].vehicle.vehicleTag}</TableCell>
    //             <Button
    //                 variant="contained"
    //                 color="secondary"
    //                 size="small"
    //                 className={classes.button}
    //                 // startIcon={<SaveIcon />}
    //                 // onClick={handleClose}
    //             >
    //                 Done
    //             </Button>
    //         </TableRow>
    //         <TableRow>
    //           <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
    //             <Collapse in={open} timeout="auto" unmountOnExit>
    //               <Box margin={1}>
    //                 <Typography variant="h6" gutterBottom component="div">
    //                   History
    //                 </Typography>
    //                 <Table size="small" aria-label="purchases">
    //                   <TableHead>
    //                     <TableRow>
    //                       <TableCell>Date</TableCell>
    //                       <TableCell>Customer</TableCell>
    //                       <TableCell align="right">Amount</TableCell>
    //                       <TableCell align="right">Total price ($)</TableCell>
    //                     </TableRow>
    //                   </TableHead>
    //                   <TableBody>
    //                     {/* {row.history.map((historyRow) => (
    //                       <TableRow key={historyRow.date}>
    //                         <TableCell component="th" scope="row">
    //                           {historyRow.date}
    //                         </TableCell>
    //                         <TableCell>{historyRow.customerId}</TableCell>
    //                         <TableCell align="right">{historyRow.amount}</TableCell>
    //                         <TableCell align="right">
    //                           {Math.round(historyRow.amount * row.price * 100) / 100}
    //                         </TableCell>
    //                       </TableRow>
    //                     ))} */}
    //                   </TableBody>
    //                 </Table>
    //               </Box>
    //             </Collapse>
    //           </TableCell>
    //         </TableRow>
    //       </React.Fragment>
    //     );
    //   }

    const NonFICODataComponent = (props) => {
        let driverPerfHistory = driverPerf[props.id].slice(3)

        if(driverPerfHistory.length > 0){
        return(
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table" size="medium">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell align="right">Speeding</TableCell>
                  <TableCell align="right">Seatbelt</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {driverPerfHistory.map((row) => (
                  <TableRow key={row.date}>
                    <TableCell component="th" scope="row">
                      {row.date}
                    </TableCell>
                    <TableCell align="right" style={getStyleForSpeeding(row.events.SPEEDING_NON_FICO !== undefined ? row.events.SPEEDING_NON_FICO.eventCount : 0)}>{row.events.SPEEDING_NON_FICO !== undefined ? row.events.SPEEDING_NON_FICO.eventCount : 0}</TableCell>

                    <TableCell align="right"
                      style={getStyleForSpeeding(row.events.SPEEDING_NON_FICO !== undefined ? row.events.SPEEDING_NON_FICO.eventCount - 1 : 0)}
                    >{row.events.SEATBELT !== undefined ? row.events.SEATBELT.eventCount : 0}</TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )
      }else {
        return (
          <Typography className={classes.title} variant="h5" id="tableTitle" component="div" align="center">
            Previous Route History Not Available
          </Typography>
        )
      }
    }

    const FICODataComponent = (props) => {
      let driverPerfHistory = driverPerf[props.id].slice(3)

      if(driverPerfHistory.length > 0){
      return(
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table" size="medium">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell align="right">FICO</TableCell>
                <TableCell align="right">Cornering</TableCell>
                <TableCell align="right">Distraction</TableCell>
                <TableCell align="right">Acceleration</TableCell>
                <TableCell align="right">Speeding</TableCell>
                <TableCell align="right">Braking</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {driverPerfHistory.map((row) => (
                <TableRow key={row.date}>
                  <TableCell component="th" scope="row">
                    {row.date}
                  </TableCell>
                  <TableCell align="right" 
                  style={getStyleForSpeeding(row.scores.FICO !== undefined ? row.scores.FICO.score : 0)}
                  >{row.scores.FICO !== undefined ? row.scores.FICO.score + '(' + row.scores.FICO.rating + ')' : 0}</TableCell>

                  <TableCell align="right"
                    // style={getStyleForSpeeding(row.scores.CORNERING !== undefined ? row.scores.CORNERING.score - 1 : 0)}
                  >{row.scores.CORNERING !== undefined ? row.scores.CORNERING.score + '(' + row.scores.CORNERING.rating + ')' : 0}</TableCell>

                  <TableCell align="right"
                    // style={getStyleForSpeeding(row.scores.CORNERING !== undefined ? row.scores.CORNERING.score - 1 : 0)}
                  >{row.scores.DISTRACTION !== undefined ? row.scores.DISTRACTION.score + '(' + row.scores.DISTRACTION.rating + ')' : 0}</TableCell>

                  <TableCell align="right"
                    // style={getStyleForSpeeding(row.scores.CORNERING !== undefined ? row.scores.CORNERING.score - 1 : 0)}
                  >{row.scores.ACCELERATION !== undefined ? row.scores.ACCELERATION.score + '(' + row.scores.ACCELERATION.rating + ')' : 0}</TableCell>

                  <TableCell align="right"
                    // style={getStyleForSpeeding(row.scores.CORNERING !== undefined ? row.scores.CORNERING.score - 1 : 0)}
                  >{row.scores.SPEEDING !== undefined ? row.scores.SPEEDING.score + '(' + row.scores.SPEEDING.rating + ')' : 0}</TableCell>

                  <TableCell align="right"
                    // style={getStyleForSpeeding(row.scores.CORNERING !== undefined ? row.scores.CORNERING.score - 1 : 0)}
                  >{row.scores.BRAKING !== undefined ? row.scores.BRAKING.score + '(' + row.scores.BRAKING.rating + ')' : 0}</TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )
    }else {
      return (
        <Typography className={classes.title} variant="h5" id="tableTitle" component="div" align="center">
          Previous Route History Not Available
        </Typography>
      )
    }
  }




    return(


<div>
  <Topbar />
<MaterialTable
            // style={{boxShadow: '0px 0px'}}
            title="Speeding and Seatbelt Exceptions"
            columns={state.columnsNonFICOException}
            data={nonFicoExceptions}

            onRowClick={(event, rowData, toggleDetailPanel) => {
              console.log('row data', rowData)

            }}

            actions={[
              {

                icon: 'save',
                tooltip: 'Done button',
                onClick: (event, rowData) => {
                  console.log(rowData);
                },
                // isFreeAction: true

              }
            ]}
            options={{
              actionsColumnIndex: -1
            }}

              detailPanel={[
                {
                  tooltip: 'Show Name',
                  render: rowData => {
                    return (
                        <NonFICODataComponent id={rowData.driverId} />

                    )
                  },
                },

              ]}


          />

<MaterialTable
            // style={{boxShadow: '0px 0px'}}
            title="FICO Score Exceptions"
            columns={state.columnsFICOException}
            data={FicoExceptions}
            onRowClick={(event, rowData, toggleDetailPanel) => {
              console.log('row data', rowData)

            }}
            actions={[
              {

                icon: 'save',
                tooltip: 'Done button',
                onClick: (event, rowData) => {
                  console.log(rowData);
                },
                // isFreeAction: true

              }
            ]}
            options={{
              actionsColumnIndex: -1
            }}

              detailPanel={[
                {
                  tooltip: 'Show Name',
                  render: rowData => {
                    return (
                        <FICODataComponent id={rowData.driverId} />

                    )
                  },
                },

              ]}

            onChangeRowsPerPage={console.log('jkjfkd')}
            onChangePage={console.log('jkjfkd')}
          />

          <MaterialTable
            // style={{boxShadow: '0px 0px'}}
            title="DVCR Missing"
            columns={state.columnsDVCRMissing}
            data={dvcrMissing}
            onRowClick={(event, rowData, toggleDetailPanel) => {
              console.log('row data', rowData)

            }}

            onChangeRowsPerPage={console.log('jkjfkd')}
            onChangePage={console.log('jkjfkd')}
          />

</div>


    )
}

export default RoutesDetails

{/* <Typography className={classes.title} variant="h4" id="tableTitle" component="div" align="center">
          Speeding and Seatbelt Exception
        </Typography>
    <TableContainer component={Paper}>

            <Table aria-label="collapsible table">
                <TableHead >

                <TableRow>
                    <TableCell />
                    <TableCell>Driver Name</TableCell>
                    <TableCell align="right">Previous Day FICO</TableCell>
                    <TableCell align="right">Speeding</TableCell>
                    <TableCell align="right">Seatbelt</TableCell>
                    <TableCell align="right">Vehicle Tag</TableCell>
                    <TableCell align="right">Action</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {

                Object.keys(nonFicoExceptions).length > 0 ? Object.values(nonFicoExceptions).map((row) => (
                    row[0].exceptions > 0 || row[1].exceptions > 0 ? <Row row={row} />: ''

                )) :

                <NoDataComponent />
                }
                </TableBody>
            </Table>
    </TableContainer>

    <Typography className={classes.title} variant="h4" id="tableTitle" component="div" align="center">
          FICO Score Exception
        </Typography>

    <TableContainer component={Paper}>

            <Table aria-label="collapsible table">
                <TableHead >

                <TableRow>
                    <TableCell />
                    <TableCell>Driver Name</TableCell>
                    <TableCell align="right">Previous Day FICO</TableCell>
                    <TableCell align="right">Acceleration</TableCell>
                    <TableCell align="right">Braking</TableCell>
                    <TableCell align="right">Cornering</TableCell>
                    <TableCell align="right">Backup</TableCell>
                    <TableCell align="right">Idling</TableCell>
                    <TableCell align="right">vehicleTag</TableCell>
                    <TableCell align="right">Action</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                 {Object.keys(FicoExceptions).length > 0 ? Object.values(FicoExceptions).map((row) => (
                    row[0].exceptions > 0 || row[1].exceptions > 0 ? <Row row={row} />: ''

                )) : <NoDataComponent />
                }
                </TableBody>
            </Table>
    </TableContainer>

    <Typography className={classes.title} variant="h4" id="tableTitle" component="div" align="center">
          DVCR Missing
        </Typography>

    <TableContainer component={Paper}>

            <Table aria-label="collapsible table">
                <TableHead >

                <TableRow>
                    <TableCell>Driver Name</TableCell>
                </TableRow>
                </TableHead>

                <TableBody>
                    {Object.keys(dvcrMissing).length > 0 ? Object.values(dvcrMissing).map((row) => (
                        <TableRow key={row.amazonName}>
                        <TableCell component="th" scope="row">
                            {row.amazonName}
                        </TableCell>

                        </TableRow>
                    )):
                    <NoDataComponent />}
                </TableBody>
            </Table>
    </TableContainer>

    </div>  */}
