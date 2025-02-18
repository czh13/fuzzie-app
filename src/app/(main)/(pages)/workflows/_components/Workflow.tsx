import React from 'react'
import Image from 'next/image';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Switch } from '@/components/ui/switch';
import Link from 'next/link';


type WorkflowProps = {
  name: string
  description: string
  id: string
  publish: boolean | null
}

const Workflow = ({ name, description, id, publish }: WorkflowProps) => {
  return (
    <Card className="flex w-full items-center justify-between">
      <CardHeader className="flex flex-col gap-4">
        <Link href={`/workflows/editor/${id}`}>
          <div className="flex flex-row gap-2">
            <Image src="/googleDrive.png" alt="Google Drive" height={30} width={30} className="object-contain" />
            <Image src="/notion.png" alt="Google Drive" height={30} width={30} className="object-contain" />
            <Image src="/slack.png" alt="Google Drive" height={30} width={30} className="object-contain" />
          </div></Link>
        <div>
          <CardTitle className="text-lg">{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <div className="flex flex-col items-center gap-2 p-4">
        <Label htmlFor="airplane-mode" className="text-muted-foreground">
          {publish! ? 'On' : 'Off'}
        </Label>
        <Switch id="airplane-mode" defaultChecked={publish!} />
      </div>
    </Card>
  )
}

export default Workflow