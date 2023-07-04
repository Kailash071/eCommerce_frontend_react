import {createContext} from 'react'

const AlertContext = createContext({success:false,message:''});
export default AlertContext