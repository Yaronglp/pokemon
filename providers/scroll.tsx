import { useState, createContext } from 'react'

interface IScrollContext {
  offsetY: number
  updateOffsetY: (offset: number) => void
}

const INITIAL_STATE: IScrollContext = {
  offsetY: 0,
  updateOffsetY: (offset: number) => {offset}
}

export const ScrollContext = createContext(INITIAL_STATE)

export const ScrollContextProvider = ({ children }: {children: React.ReactNode}) => {
  const [offsetY, setOffsetY] = useState<number>(0)
 
  const updateOffsetY = (offset: number) => {
    setOffsetY(offset)
  }

  return (
    <ScrollContext.Provider value={{ offsetY, updateOffsetY }}>
      {children}
    </ScrollContext.Provider>)
}
