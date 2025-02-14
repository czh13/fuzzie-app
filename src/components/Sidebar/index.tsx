'use client'
import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { menuOptions } from '@/lib/constant'
import { Database, GitBranch, LucideMousePointerClick } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Separator } from '@/components/ui/separator'
import { ModeToggle } from '@/components/global/ModeToggle'

type Props = {}

function Sidebar({ }: Props) {

  const pathname = usePathname()

  return (
    <nav className="dark:bg-black h-screen overflow-scroll flex flex-col items-center justify-between gap-10 py-6 px-2">
      <div className="flex flex-col gap-8 items-center justify-center">
        <Link href='/' className="flex flex-row font-bold">fuzzie.</Link>
        <TooltipProvider>
          {menuOptions.map((menuItem) => (
            <ul key={menuItem.name}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger>
                  <li>
                    <Link href={menuItem.href} className={clsx('group h-8 w-8 flex items-center justify-center scale-1.5 rounded-lg p-[3px] cursor-pointer', {
                      'dark:bg-[#2F006B] bg-[#EEE0FF]': pathname === menuItem.href
                    })}>
                      <menuItem.Component selected={pathname === menuItem.href} />
                    </Link>
                  </li>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="bg-black/10 backdrop-blur-xl"
                >
                  <p>{menuItem.name}</p>
                </TooltipContent>
              </Tooltip>
            </ul>
          ))}
        </TooltipProvider>
        <Separator />
        <div className="h-56 flex flex-col gap-9 items-center dark:bg-[#353346]/30 py-4 px-2 rounded-full overflow-scroll border-[1px]">
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <LucideMousePointerClick
              className="dark:text-white"
              size={18}
            />
            <div className="absolute h-6 left-1/2 -transition-x-1/2 transform -bottom-[30px] border-l-2 border-muted-foreground/50" />
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <Database
              className="text-muted-foreground"
              size={18}
            />
            <div className="absolute h-6 left-1/2 -transition-x-1/2 transform -bottom-[30px] border-l-2 border-muted-foreground/50" />
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <GitBranch
              className="text-muted-foreground"
              size={18}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col gap-8">
        <ModeToggle />
      </div>
    </nav>
  )
}

export default Sidebar