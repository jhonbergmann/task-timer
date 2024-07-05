import {useContext} from 'react'
import {HandPalm, Play} from 'phosphor-react'
import {FormProvider, useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'

import {INewCycleFormData, newCycleFormValidationSchema} from './data'
import {HomeContainer, StartCountdownButton, StopCountdownButton} from './styles'
import {Countdown, NewCycleForm} from '@/pages/Home/components'
import {CyclesContext} from '@/contexts/CyclesContext'

export function Home() {
  const {activeCycle, createNewCycle, interruptCurrentCycle} = useContext(CyclesContext)

  const newCycleForm = useForm<INewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const {handleSubmit, watch, reset} = newCycleForm

  function handleCreateNewCycle(data: INewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisable = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountdownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisable} type="submit">
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
