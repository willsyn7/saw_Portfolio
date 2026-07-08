import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface ProjectsState {
  expandedProjectId: string | null
  selectedSkills: string[]
}

const initialState: ProjectsState = {
  expandedProjectId: null,
  selectedSkills: [],
}

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
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
      state.expandedProjectId = null
    },
  },
})

export const { toggleExpanded, toggleSkill } = projectsSlice.actions
export default projectsSlice.reducer
