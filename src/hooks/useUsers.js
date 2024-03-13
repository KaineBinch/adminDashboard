import { useContext } from "react"
import { UserContext } from "../contexts/userContext"

export const useUsers = () => {
  const context = useContext(UserContext)
  if (!context.users) return []

  return context.users.map(user => ({
    ...user, address: user.address.address, city: user.address.city, postalCode: user.address.postalCode,
  }))
}