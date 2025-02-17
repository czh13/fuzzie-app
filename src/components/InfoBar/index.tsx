'use client'
import React, { useEffect } from 'react'
import { ModeToggle } from '@/components/global/ModeToggle'
import { Book, Headphones, Search } from 'lucide-react'
import Templates from '@/components/icons/cloud_download'
import { Input } from '@/components/ui/input'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { UserButton } from '@clerk/nextjs'

type Props = {}

function InfoBar({ }: Props) {
  return (
    <div className="flex flex-row items-center justify-end gap-6 p-4 w-full dark:bg-black ">
      <span className="flex items-center px-4 rounded-full bg-muted">
        <Search />
        <Input placeholder="Quick Search" className="border-none bg-transparent" />
      </span>
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Headphones />
          </TooltipTrigger>
          <TooltipContent>
            <p>Contact Support</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Book />
          </TooltipTrigger>
          <TooltipContent>
            <p>Guide</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <UserButton />
    </div>
  )
}

export default InfoBar