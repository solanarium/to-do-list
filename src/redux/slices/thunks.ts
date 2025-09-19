import { createAsyncThunk } from '@reduxjs/toolkit'

import { addTask } from '../../api/addTask'
import { deleteTask } from '../../api/deleteTask'
import { getTasks } from '../../api/getTasks'
import { updateTask } from '../../api/updateTask'

export const getTasksThunk = createAsyncThunk('tasks/getTasks', getTasks)

export const updateTaskThunk = createAsyncThunk('tasks/updateTask', updateTask)

export const deleteTaskThunk = createAsyncThunk('tasks/deleteTask', deleteTask)

export const addTaskThunk = createAsyncThunk('taks/addTask', addTask)
