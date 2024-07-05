import {produce} from 'immer'

import {ActionTypes} from './actions'
import {IActionType, ICyclesState} from './data'

export function cyclesReducer(state: ICyclesState, action: IActionType) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      return produce(state, (draft) => {
        if (action.payload && action.payload.newCycle) {
          draft.cycles.push(action.payload.newCycle)
          draft.activeCycleId = action.payload.newCycle.id
        }
      })
    case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].interruptedDate = new Date()
      })
    }
    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].finishedDate = new Date()
      })
    }
    default:
      return state
  }
}
