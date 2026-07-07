import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface ProjectsState {
  currentPage: number
  expandedProjectId: string | null
  selectedSkills: string[]
}

const initialState: ProjectsState = {
  currentPage: 1,
  expandedProjectId: null,
  selectedSkills: [],
}

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    nextPage(state) {
      state.currentPage += 1
      state.expandedProjectId = null
    },
    prevPage(state) {
      state.currentPage = Math.max(1, state.currentPage - 1)
      state.expandedProjectId = null
    },
    toggleExpanded(state, action: PayloadAction<string>) {
      state.expandedProjectId =
        state.expandedProjectId === action.payload ? null : action.payload
    },
    toggleSkill(state, action: PayloadAction<string>) {
      const index = state.selectedSkills.indexOf(action.payload)
      if (index === -1) {
        state.selectedSkills.push(action.payload)
      } else {
        state.selectedSkills.splice(index, 1)
      }
      state.currentPage = 1
      state.expandedProjectId = null
    },
  },
})

export const { nextPage, prevPage, toggleExpanded, toggleSkill } =
  projectsSlice.actions
export default projectsSlice.reducer
