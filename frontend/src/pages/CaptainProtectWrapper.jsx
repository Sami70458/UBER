// import React, { useContext, useEffect, useState } from 'react'
// import { CaptainDataContext } from '../context/CaptainContext'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'

// const CaptainProtectWrapper = ({
//     children
// }) => {

//     const token = localStorage.getItem('token')
//     const navigate = useNavigate()
//     const { captain, setCaptain } = useContext(CaptainDataContext)
//     const [ isLoading, setIsLoading] = useState(true)



//     console.log(token)

//     useEffect(() => {
//         if (!token) {
//             navigate('/captain-login')
//         }
//     }, [token])

//     axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
//         headers:{
//             Authorization: `Bearer ${token}`
//         }
//     }).then((response) => {
//         if (response.status === 200) {
//             setCaptain(response.data.captain)
//             setIsLoading(false)
//         }
//     }).catch((error) => {
//         console.error(error)
//         localStorage.removeItem('token')
//         navigate('/captain-login')
//     })

//     if (isLoading) {
//         return (
//             <div>Loading...</div>
//         )
//     }

//     return (
//     <>
//         {children}
//     </>
//   )
// }

// export default CaptainProtectWrapper



import React, { useContext, useEffect, useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainProtectWrapper = ({ children }) => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const { setCaptain } = useContext(CaptainDataContext)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // If no token, redirect
    if (!token) {
      navigate('/captain-login')
      return
    }

    // Call profile API
    const fetchCaptainProfile = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        if (response.status === 200) {
          setCaptain(response.data.captain)
          setIsLoading(false)
        }
      } catch (error) {
        console.error("API error:", error)
        localStorage.removeItem('token')
        navigate('/captain-login')
      }
    }

    fetchCaptainProfile()
  }, [token, navigate, setCaptain])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return <>{children}</>
}

export default CaptainProtectWrapper
