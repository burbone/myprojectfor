'use client'

import { useState, useEffect } from 'react'
import { User, LoginCredentials, RegisterCredentials, AuthResponse } from '@/types/auth'
import { authService } from '@/services/auth'

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = localStorage.getItem('token')
        if (token) {
          const user = await authService.getCurrentUser()
          setUser(user)
        }
      } catch (err) {
        setError('Ошибка при загрузке пользователя')
      } finally {
        setLoading(false)
      }
    }

    initAuth()
  }, [])

  const login = async (credentials: LoginCredentials) => {
    try {
      setLoading(true)
      setError(null)
      const { user, token } = await authService.login(credentials)
      localStorage.setItem('token', token)
      setUser(user)
    } catch (err) {
      setError('Ошибка при входе')
      throw err
    } finally {
      setLoading(false)
    }
  }

  const register = async (credentials: RegisterCredentials) => {
    try {
      setLoading(true)
      setError(null)
      const { user, token } = await authService.register(credentials)
      localStorage.setItem('token', token)
      setUser(user)
    } catch (err) {
      setError('Ошибка при регистрации')
      throw err
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    try {
      await authService.logout()
      localStorage.removeItem('token')
      setUser(null)
    } catch (err) {
      setError('Ошибка при выходе')
      throw err
    }
  }

  return {
    user,
    loading,
    error,
    login,
    register,
    logout
  }
}