// interface/workflow_interface.ts

export interface Step {
  title: string
  description: string
  svg: {
    viewBox: string
    path: string
  }
}

export interface WorkflowData {
  steps: Step[]
  benefits: string[]
}

