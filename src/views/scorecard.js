import React from 'react'
import {useSelector} from 'react-redux'
// import { Markup } from 'interweave'
import {makeStyles} from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));


const ScoreCard = () => {
    const expanded = useSelector(state => state.expanded)
    const [state, setState] = React.useState({expanded: true});
    //const { fetchRoutesData, fetchPerformanceData } = useRoutes()
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table" size="medium">
                <TableHead>
                    <TableRow>
                        <TableCell>Metric Name</TableCell>
                        <TableCell>Current Week</TableCell>
                        <TableCell>Last Week</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <h2>Overall Standing</h2>
                        </TableCell>
                        <TableCell>
                            <h2>N/A</h2>
                        </TableCell>
                        <TableCell>
                            <h2>N/A</h2>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <h2>Safety And Compliance</h2>
                            <TableRow colSpan={2}>
                                <h3>Safety Score</h3>
                                <TableRow colSpan={2}>
                                    Safe Driving Metric
                                </TableRow>
                                <TableRow colSpan={2}>
                                    Seatbelt-Off Rate
                                </TableRow>
                                <TableRow>
                                    Speeding Event Rate
                                </TableRow>
                                <TableRow>
                                    DVCR Compliance
                                </TableRow>
                                <TableRow>
                                    On-Time PM Compliance
                                </TableRow>
                            </TableRow>
                            <TableRow colSpan={2}>
                                <h3>Compliance Score</h3>
                                <TableRow colSpan={2}>
                                    Working Hours Compliance (WHC)
                                </TableRow>
                            </TableRow>
                            <TableRow>
                                <h3>Customer Escalation Defect DPMO</h3>
                            </TableRow>
                        </TableCell>
                        <TableCell>
                            <h2>N/A</h2>
                            <TableRow colSpan={2}>
                                <h3>N/A</h3>
                                <TableRow colSpan={2}>
                                    92.20
                                </TableRow>
                                <TableRow colSpan={2}>
                                    0.08%
                                </TableRow>
                                <TableRow>
                                    0.02%
                                </TableRow>
                                <TableRow>
                                    100%
                                </TableRow>
                                <TableRow>
                                    100%
                                </TableRow>
                            </TableRow>
                            <TableRow colSpan={2}>
                                <h3>N/A</h3>
                                <TableRow colSpan={2}>
                                   N/A
                                </TableRow>
                            </TableRow>
                            <TableRow>
                                <h3>1234</h3>
                            </TableRow>
                        </TableCell>
                        <TableCell>
                            <h2>N/A</h2>
                            <TableRow colSpan={2}>
                                <h3>N/A</h3>
                                <TableRow colSpan={2}>
                                    92.20
                                </TableRow>
                                <TableRow colSpan={2}>
                                    0.08%
                                </TableRow>
                                <TableRow>
                                    0.02%
                                </TableRow>
                                <TableRow>
                                    100%
                                </TableRow>
                                <TableRow>
                                    100%
                                </TableRow>
                            </TableRow>
                            <TableRow colSpan={2}>
                                <h3>N/A</h3>
                                <TableRow colSpan={2}>
                                    N/A
                                </TableRow>
                            </TableRow>
                            <TableRow>
                                <h3>1234</h3>
                            </TableRow>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <h2>Quality</h2>
                            <TableRow colSpan={2}>
                                <h3> Delivery Completion Rate </h3>
                            </TableRow>
                            <TableRow colSpan={2}>
                                <h3> Delivered and Received </h3>
                            </TableRow>
                            <TableRow>
                                <h3>Standard Work Compliance</h3>
                                <TableRow>
                                    Photo-On-Delivery
                                </TableRow>
                                <TableRow>
                                    Contact Compliance
                                </TableRow>
                                <TableRow>
                                    Scan Compliance
                                </TableRow>
                                <TableRow>
                                    Attended Delivery Accuracy
                                </TableRow>
                            </TableRow>
                        </TableCell>
                        <TableCell>
                            <h2>N/A</h2>
                            <TableRow>
                                <h3>N/A</h3>
                            </TableRow>
                            <TableRow>
                                <h3>N/A</h3>
                            </TableRow>
                            <TableRow>
                                <h3>N/A</h3>
                                <TableRow>
                                   100%
                                </TableRow>
                                <TableRow>
                                    100%
                                </TableRow>
                                <TableRow>
                                    100%
                                </TableRow>
                                <TableRow>
                                    100%
                                </TableRow>
                            </TableRow>
                        </TableCell>
                        <TableCell>
                            <h2>N/A</h2>
                            <TableRow>
                                <h3>N/A</h3>
                            </TableRow>
                            <TableRow>
                                <h3>N/A</h3>
                            </TableRow>
                            <TableRow>
                                <h3>N/A</h3>
                                <TableRow>
                                    100%
                                </TableRow>
                                <TableRow>
                                    100%
                                </TableRow>
                                <TableRow>
                                    100%
                                </TableRow>
                                <TableRow>
                                    100%
                                </TableRow>
                            </TableRow>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <h2>Team</h2>
                            <TableRow colSpan={2}>
                                <h3>High Performers Share</h3>
                            </TableRow>
                            <TableRow colSpan={2}>
                                <h3>Low Performers Share</h3>
                            </TableRow>
                            <TableRow>
                                <h3>Attrition Rate</h3>
                            </TableRow>
                        </TableCell>
                        <TableCell>
                            <h2>N/A</h2>
                            <TableRow>
                                <h3>N/A</h3>
                            </TableRow>
                            <TableRow>
                                <h3>N/A</h3>
                            </TableRow>
                            <TableRow>
                               <h3>0.00</h3>
                            </TableRow>
                        </TableCell>
                        <TableCell>
                            <h2>N/A</h2>
                            <TableRow>
                                <h3>N/A</h3>
                            </TableRow>
                            <TableRow>
                                <h3>N/A</h3>
                            </TableRow>
                            <TableRow>
                                <h3>0.00</h3>
                            </TableRow>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ScoreCard
