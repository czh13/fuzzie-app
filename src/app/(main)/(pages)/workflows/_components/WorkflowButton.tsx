"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import { Plus } from 'lucide-react';

type Props = {}

const WorkflowButton = (props: Props) => {
  const handleClick = () => {
    console.log('clicked')
  }
  return (
    <Button size='icon' onClick={handleClick}>
      <Plus />
    </Button>
  )
}

export default WorkflowButton