// import jwt from 'jsonwebtoken'
// export const  GetUserInfo = ()=>{
//     return localStorage.getItem('userInfo')
// }
// export const  GetUserToken = ()=>{
//     return localStorage.getItem('userToken')
// }
// export const  SetUserInfo = (userInfo)=>{
//     localStorage.setItem('userInfo',userInfo)
// }
// export const  SetUserToken = (userToken)=>{
//     localStorage.setItem('userToken',userToken)
// }
// export const  AuthenticateUserToken = ()=>{
//     const userToken = GetUserToken()
//     if(!userToken){
//         return false
//     }
//     let decode = jwt.decode(userToken)
//     console.log('decode auth',decode)
//     return decode
// }

import { useSelector ,useDispatch} from "react-redux";
import { setUserData, useUserSelector,useUserTokenSelector ,clearUserAndToken} from "../reducers/userReducer";

export default function useToken() {
    const dispatch = useDispatch()
  const getUser = localStorage.getItem('user');
  const user = useSelector(useUserSelector)
  const userToken = useSelector(useUserTokenSelector)
  console.log('user',user,'userToken',userToken)
  if(!user&&!userToken){
    console.log('not in store')
    console.log('auth service user',getUser)
    if(getUser){
    console.log('setting  user in store')
        dispatch(setUserData(getUser))
    }else{
        dispatch(clearUserAndToken())
    }
  }
  return {
    user,
    userToken
  }
}