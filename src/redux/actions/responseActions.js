const updateResponses = (type, obj) => {
    switch (type) {
        case 'DRIVER_PERF':
            return {
            type: 'DRIVER_PERF',
            driverPerf: obj,
            }
        case 'NON_FICO_EXCEPTION_BY_DRIVER':
            return {
              type: 'NON_FICO_EXCEPTION_BY_DRIVER',
              nonFicoExceptionsByDriver: obj,
            }  
        case 'FICO_EXCEPTION_BY_DRIVER':
            return {
                type: 'FICO_EXCEPTION_BY_DRIVER',
                ficoExceptionsByDriver: obj,
            } 
        case 'DVCR_MISSING':
            return {
                type: 'DVCR_MISSING',
                dvcrMissing: obj
            }         
        case 'INITIAL_RESPONSE_DATA':
            return {
                type: 'INITIAL_RESPONSE_DATA',
            }
        default:
    }
  }
  
  export default updateResponses