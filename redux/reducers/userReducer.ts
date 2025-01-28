import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import { setPoints, addPoints, setStreak, updateDailyGoals, addAchievement } from '../actions/userActions'

interface UserState {
  points: number
  streak: number
  dailyGoals: {
    lessons: number
    practiceMinutes: number
  }
  achievements: string[]
}

const initialState: UserState = {
  points: 0,
  streak: 0,
  dailyGoals: {
    lessons: 0,
    practiceMinutes: 0,
  },
  achievements: [],
}

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setPoints, (state, action: PayloadAction<number>) => {
      state.points = action.payload
    })
    .addCase(addPoints, (state, action: PayloadAction<number>) => {
      state.points += action.payload
    })
    .addCase(setStreak, (state, action: PayloadAction<number>) => {
      state.streak = action.payload
    })
    .addCase(updateDailyGoals, (state, action: PayloadAction<{lessons?: number, practiceMinutes?: number}>) => {
      state.dailyGoals = { ...state.dailyGoals, ...action.payload }
    })
    .addCase(addAchievement, (state, action: PayloadAction<string>) => {
      if (!state.achievements.includes(action.payload)) {
        state.achievements.push(action.payload)
      }
    })
})

export default userReducer 