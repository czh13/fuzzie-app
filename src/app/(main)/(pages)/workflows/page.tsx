import React from 'react'
import WorkflowButton from './_components/WorkflowButton';
import Workflows from './_components/Workflows';

type Props = {}

const WorkflowsPage = (props: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="sticky top-0 z-10 flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        Workflows
        <WorkflowButton />
      </h1>
      <Workflows />
    </div>
  )
}

export default WorkflowsPage