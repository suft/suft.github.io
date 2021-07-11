import React, { useState, useEffect, useCallback } from 'react'
import { useTheme } from 'next-themes'
import Switch from 'react-switch'
import { E } from './Tags'

const DARK = 'dark'
const LIGHT = 'light'

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme()
  const dark = theme === DARK ? true : false
  const [checked, setChecked] = useState(dark)
  const [mounted, setMounted] = useState(false)
  
  const handleChange = useCallback((value: boolean) => {
    setChecked(value)
  }, [])

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    setTheme(checked ? DARK : LIGHT)
  }, [checked, setTheme])

  if (!mounted) return null
  return (
    <Switch 
      onChange={handleChange} 
      checked={checked}
      aria-label="switch between day and night themes"
      offColor="#555"
      onColor="#ffd4d5"
      offHandleColor="#555"
      onHandleColor="#ffd4d5"
      activeBoxShadow="0px 0px 1px 4px rgba(0, 0, 0, 0.2)"
      uncheckedIcon={false}
      checkedIcon={false}
      uncheckedHandleIcon={
        <div className="flex justify-center items-center h-full bg-transparent">
          <E>☀️</E>
        </div>
      }
      checkedHandleIcon={
        <div className="flex justify-center items-center h-full">
          <E>🌑</E>
        </div>
      }
      handleDiameter={28}
      height={40}
      width={70} />
  )
}

export default ThemeSwitch