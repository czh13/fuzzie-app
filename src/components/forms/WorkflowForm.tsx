import { WorkflowFormSchema } from '@/lib/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import type { z } from 'zod'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Loader2 } from 'lucide-react'

type WorkflowFormProps = {
  title?: string
  subTitle?: string
}

const WorkflowForm = ({ title, subTitle }: WorkflowFormProps) => {

  const initForm = useForm<z.infer<typeof WorkflowFormSchema>>({
    resolver: zodResolver(WorkflowFormSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      description: '',
    },
  })

  const isLoading = initForm.formState.isLoading
  const router = useRouter()

  const handleSubmit = (valus: z.infer<typeof WorkflowFormSchema>) => { }

  return (
    <Card className="w-full max-w-[650px] border-none">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subTitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...initForm}>
          <form className="flex flex-col gap-4 text-left" onSubmit={initForm.handleSubmit(handleSubmit)}>
            <FormField name='name' disabled={isLoading} control={initForm.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder='Name' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name='description' disabled={isLoading} control={initForm.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input {...field} placeholder='Description' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <Button
              className="mt-4"
              disabled={isLoading}
              type="submit"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving
                </>
              ) : (
                'Save Settings'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default WorkflowForm