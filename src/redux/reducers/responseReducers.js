const updateResponses = (state = { driverPerf:{}, nonFicoExceptionsByDriver:[],ficoExceptionsByDriver:[], dvcrMissing: []}, action) => {
    switch (action.type) {
        case 'DRIVER_PERF':
            return { ...state,driverPerf: action.driverPerf}
        case 'NON_FICO_EXCEPTION_BY_DRIVER':
            return { ...state,nonFicoExceptionsByDriver: action.nonFicoExceptionsByDriver}
        case 'FICO_EXCEPTION_BY_DRIVER':
            return { ...state,ficoExceptionsByDriver: action.ficoExceptionsByDriver}
        case 'DVCR_MISSING':
            return { ...state,dvcrMissing: action.dvcrMissing}    
        case 'INITIAL_RESPONSE_DATA':
            return {
                driverPerf:{},
                nonFicoExceptionsByDriver:[]
            }
        default:
            return state
    }
  }
  
  export default updateResponses