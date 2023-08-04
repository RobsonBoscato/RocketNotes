import { createContext, useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { api } from "../services/api"

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({email, password}) {

    try {
      const response = await api.post("/sessions", {email, password})
      const { user, token } = response.data

      localStorage.setItem("@rocketnotes:user", JSON.stringify(user))
      localStorage.setItem("@rocketnotes:token", token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({user, token})

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)          
      } else {
        alert("Couldn't login. Please try again")
      }
    }
  }
  
  function signOut() {
    localStorage.removeItem("@rocketnotes:token")
    localStorage.removeItem("@rocketnotes:user")

    // localStorage.clear()
    setData({})    
  }
    
  async function updateProfile({ user, avatarFile }) {
    try {

      if (avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append("avatar", avatarFile)

        const response = await api.patch("/users/avatar", fileUploadForm)
        user.avatar = response.data.avatar
        
        
      }
      await api.put("/users", user)
      localStorage.setItem("@rocketnotes:user", JSON.stringify(user))

      setData({ user, token: data.token })

      alert("User updated successfully")
      
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)        
      } else {
        alert("Wasn't able to update the profile")
      }
    }
  }
  useEffect(() => {
    const token = localStorage.getItem("@rocketnotes:token")
    const user = localStorage.getItem("@rocketnotes:user")

    if (token && user) {

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user)
      })
    }

  }, [])

  return (
    <AuthContext.Provider value={{
      signIn, 
      signOut,
      updateProfile,
      user: data.user
      }}>
        
      {children}
    </AuthContext.Provider>
  )
}

  function useAuth() {
    const context = useContext(AuthContext)
    return context  
  }
  
export { AuthProvider, useAuth}