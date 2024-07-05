import {ReactNode} from 'react'

import {ICycle} from '@/reducers/cycles/data'

export interface ICreateCycleData {
  task: string
  minutesAmount: number
}

export interface ICyclesContextType {
  cycles: ICycle[]
  activeCycle: ICycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: ICreateCycleData) => void
  interruptCurrentCycle: () => void
}

export interface ICyclesContextProviderProps {
  children: ReactNode
}
