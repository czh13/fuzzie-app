"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import { Plus } from 'lucide-react';
import { useModal } from '@/providers/modal-provider';
import CustomModal from '@/components/global/CustomModal';
import WorkflowForm from '@/components/forms/WorkflowForm';
type Props = {}

const WorkflowButton = (props: Props) => {

  const { setOpen } = useModal()

  const handleClick = () => {
    setOpen(
      <CustomModal title='Workflow' subheading='Create a new workflow'>
        <WorkflowForm />
      </CustomModal>
    )
  }
  return (
    <Button size='icon' onClick={handleClick}>
      <Plus />
    </Button>
  )
}

export default WorkflowButton