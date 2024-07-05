import {ActionTypes} from './actions'

export interface ICycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

export interface ICyclesState {
  cycles: ICycle[]
  activeCycleId: string | null
}

export interface IActionType {
  type: ActionTypes
  payload?: {
    newCycle?: ICycle
  }
}
