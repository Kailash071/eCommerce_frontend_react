import {createContext} from 'react'

const AlertContext = createContext({show:false,message:''});
export default AlertContext