import jwt from 'jsonwebtoken'
export const  GetUserInfo = ()=>{
    return localStorage.getItem('userInfo')
}
export const  GetUserToken = ()=>{
    return localStorage.getItem('userToken')
}
export const  SetUserInfo = (userInfo)=>{
    localStorage.setItem('userInfo',userInfo)
}
export const  SetUserToken = (userToken)=>{
    localStorage.setItem('userToken',userToken)
}
export const  AuthenticateUserToken = ()=>{
    const userToken = GetUserToken()
    if(!userToken){
        return false
    }
    let decode = jwt.decode(userToken)
    console.log('decode auth',decode)
    return decode
}
