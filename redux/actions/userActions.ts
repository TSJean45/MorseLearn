import { createAction } from '@reduxjs/toolkit'

export const setPoints = createAction<number>('SET_POINTS')
export const addPoints = createAction<number>('ADD_POINTS')
export const setStreak = createAction<number>('SET_STREAK')
export const updateDailyGoals = createAction<{lessons?: number, practiceMinutes?: number}>('UPDATE_DAILY_GOALS')
export const addAchievement = createAction<string>('ADD_ACHIEVEMENT') 