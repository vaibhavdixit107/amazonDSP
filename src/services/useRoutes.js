import {formatDate} from '../Hepler'
//import { history } from 'App'
import { useDispatch, useSelector } from 'react-redux'
// import updateResponses from 'redux/actions/responseActions'
import updateResponses from '../redux/actions/responseActions'
const axios = require('axios').default

let routesURL = 'https://logistics.amazon.com/operations/execution/api/routes/summary?localDate=' + formatDate(new Date()) + '&serviceAreaId=10'

let performanceUrl = 'https://logistics.amazon.com/metrics/associates/data.json?companyId=c6c75b3a-0e35-4084-9a9d-f6af357d0b30&serviceArea=All&viewType=associates_concession_view&aggregationIntervalType=WEEKS&date=2020-06-14&sortDir=DESC'

// let current = new Date(new Date().setHours(0, 0, 0));
// let fromDate = current.toISOString();
// current.setDate(current.getDate() + 2);
// let toDate = current.toISOString();

let fromDate = new Date('24 June 2020 00:00:00')//"2020-06-25T04:00:00.348Z"
let toDate = new Date('25 June 2020 00:00:00')//"2020-06-267T04:00:00.348Z"

let out = {
    "dateFrom": fromDate,
    "dateTo": toDate,
    "tenantId": "Ondot",
    "exceptionType": ["SPEEDING_EVENT_1", "SEATBELT", "IDLING", "BACKUP", "ACCELERATION", "CORNERING", "BRAKING"]
  }
  
let url = 'https://ox4xrzd1jc.execute-api.us-east-1.amazonaws.com/Prod/performance/Ondot/exceptions';

function useRoutes(){
    const dispatch = useDispatch()
    const fetchRoutesData = async () =>{
        axios.get(routesURL)
            .then(res=>{
                console.log(res)
            })
            .catch(err=>{
                console.log(err)
            })    
    }

    const fetchPerformanceData = async  =>{
        axios.post(url, JSON.stringify(out))
            .then(res=>{
                let NonFicoExceptions= []
                
                NonFicoExceptions.push(res.data.vehicleExceptions.SEATBELT)
                NonFicoExceptions.push(res.data.vehicleExceptions.SPEEDING_EVENT_1)

                let NonFicoExceptionsByDriver = {}
                NonFicoExceptions.forEach(exceptions => {
                    exceptions.forEach(exception=>{
                        if(NonFicoExceptionsByDriver[exception.driverId] !== undefined){
                            NonFicoExceptionsByDriver[exception.driverId].push(exception)
                        }else {
                            NonFicoExceptionsByDriver[exception.driverId] = [exception]
                        }
                        
                    })
                    
                })

                let FicoExceptions= []
                
                FicoExceptions.push(res.data.vehicleExceptions.ACCELERATION)
                FicoExceptions.push(res.data.vehicleExceptions.BACKUP)
                FicoExceptions.push(res.data.vehicleExceptions.BRAKING)
                FicoExceptions.push(res.data.vehicleExceptions.CORNERING)
                FicoExceptions.push(res.data.vehicleExceptions.IDLING)
                

                let ficoExceptionsByDriver = {}
                FicoExceptions.forEach(exceptions=>{
                    exceptions.forEach(exception=>{
                        if(ficoExceptionsByDriver[exception.driverId] !== undefined){
                            ficoExceptionsByDriver[exception.driverId].push(exception)
                        }else {
                            ficoExceptionsByDriver[exception.driverId] = [exception]
                        }
                        
                    })
                })
                setNonFicoExceptionsDataByDriver(NonFicoExceptionsByDriver, res.data.driverPerformanceMap)
                setFicoExceptionsDataByDriver(ficoExceptionsByDriver, res.data.driverPerformanceMap)
                // setDriverPerf(res.data.driverPerformanceMap)
                //  dispatch(updateResponses('NON_FICO_EXCEPTION_BY_DRIVER', NonFicoExceptionsByDriver))
                // return res
                 dispatch(updateResponses('DRIVER_PERF', res.data.driverPerformanceMap))
                 dispatch(updateResponses('DVCR_MISSING', res.data.dvcrMissing))
                //  dispatch(updateResponses('FICO_EXCEPTION_BY_DRIVER', ficoExceptionsByDriver))
               // dispatch(updateResponses('DRIVER_PERF', res.data))
                console.log(res)
            })
            .catch(err=>{
                console.log(err)
            })    
    }

    const setNonFicoExceptionsDataByDriver = (data, driverPerf) => {
        let arr = []
       
        Object.values(data).map(e=>{
            let dataObj = {}
            let score = ''
            let rating = ''
            let FICOResult = ''
            if(e[0].exceptions > 0 || e[1].exceptions > 0){
                dataObj.seatbelt = e[0].exceptions
                dataObj.speeding = e[1].exceptions
                dataObj.name = e[0].driverName
                dataObj.vehicleTag = e[0].vehicle.vehicleTag
                dataObj.driverId = e[0].driverId

                Object.keys(driverPerf).map(id => {
                    if(id === e[0].driverId){
                        score = driverPerf[id][0].scores.FICO.score
                        rating  = driverPerf[id][0].scores.FICO.rating
                        FICOResult = score + ' ' + rating
                    }
                })

                dataObj.FICOResult = FICOResult
                // var button = document.createElement("BUTTON");   // Create a <button> element
                // button.innerHTML = "CLICK ME"; 
                
                // document.body.appendChild(button);  
                // dataObj.action = button



                arr.push(dataObj) 
            }
            
          
        })
        

       
        dispatch(updateResponses('NON_FICO_EXCEPTION_BY_DRIVER', arr))
    }
    
    const setDriverPerf = (data, driverPerf) => {

        
        dispatch(updateResponses('DRIVER_PERF', data))
    }
    const setFicoExceptionsDataByDriver = (data, driverPerf) => {
        let arr = []
        Object.values(data).map(e=>{
            let dataObj = {}
            let score = ''
            let rating = ''
            let FICOResult = ''
            // if(e[0].exceptions > 0 || e[1].exceptions > 0 || e[2].exceptions > 0 || e[3].exceptions > 0 || e[4].exceptions > 0 ){
                dataObj.acceleration = e[0].exceptions
                dataObj.braking = e[1].exceptions
                dataObj.cornering = e[2].exceptions
                dataObj.backup = e[3].exceptions
                dataObj.idling = e[4].exceptions
                dataObj.name = e[0].driverName
                dataObj.vehicleTag = e[0].vehicle.vehicleTag
                dataObj.driverId = e[0].driverId
                
                Object.keys(driverPerf).map(id => {
                    if(id === e[0].driverId){
                        score = driverPerf[id][0].scores.FICO.score
                        rating  = driverPerf[id][0].scores.FICO.rating
                        FICOResult = score + ' ' + rating
                    }
                })

                dataObj.FICOResult = FICOResult
                arr.push(dataObj) 
            // }
            
          
        })

        dispatch(updateResponses('FICO_EXCEPTION_BY_DRIVER',arr))
    }


    return {fetchRoutesData, fetchPerformanceData}
}



export default useRoutes