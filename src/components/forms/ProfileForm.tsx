'use client'

import React, { use, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { EditUserProfileSchema } from '@/lib/types'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import type { User } from '@prisma/client'

type ProfileFormProps = {
  user: User
  onUpdate: (name: string) => Promise<any>
}

const ProfileForm = ({ user, onUpdate }: ProfileFormProps) => {


  const [isLoading, setIsLoading] = useState(false)
  const initForm = useForm<z.infer<typeof EditUserProfileSchema>>({
    resolver: zodResolver(EditUserProfileSchema),
    mode: 'onChange',
    defaultValues: {
      name: user.name || '',
      email: user.email || '',
    },
  })

  const onSubmit = async (data: z.infer<typeof EditUserProfileSchema>) => {
    setIsLoading(true)
    const response = await onUpdate(data.name)
    setIsLoading(false)
  }

  useEffect(() => {
    user && initForm.reset({ name: user.name, email: user.email })
  }, [user])


  return (
    <Form {...initForm}>
      <form className='flex flex-col gap-6' onSubmit={initForm.handleSubmit(onSubmit)}>
        <FormField disabled={isLoading} control={initForm.control} name='name' render={({ field }) => (
          <FormItem>
            <FormLabel className='text-lg'>User full name</FormLabel>
            <FormControl>
              <Input {...field} placeholder='Name' />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />
        <FormField disabled={isLoading} control={initForm.control} name='email' render={({ field }) => (
          <FormItem>
            <FormLabel className='text-lg'>User email</FormLabel>
            <FormControl>
              <Input {...field} placeholder='Email' type='email' disabled={true} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />
        <Button type='submit' className="self-start hover:bg-[#2F006B] hover:text-white">
          {isLoading ? <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Saving
          </> : 'Save user Settings'}
        </Button>
      </form>
    </Form>
  )
}

export default ProfileForm