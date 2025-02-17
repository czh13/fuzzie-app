import ProfileForm from '@/components/forms/ProfileForm'
import React from 'react'
import ProfilePicture from './_components/ProfilePicture'
import { db } from '@/lib/db'
import { currentUser } from '@clerk/nextjs'

const SettingsPage = async () => {

  const authUser = await currentUser()
  if (!authUser) return null

  const user = await db.user.findUnique({ where: { clerkId: authUser.id } })

  const removeProfileImage = async () => {
    'use server'
    const response = await db.user.update({ where: { clerkId: authUser.id }, data: { profileImage: '' } })
    return response
  }

  const uploadProfileImage = async (image: string) => {
    'use server'
    const response = await db.user.update({ where: { clerkId: authUser.id }, data: { profileImage: image } })
    return response
  }

  const updateUserProfile = async (name: string) => {
    'use server'
    const response = await db.user.update({ where: { clerkId: authUser.id }, data: { name } })
    return response
  }


  return (
    <div className="flex flex-col gap-4">
      <h1 className="sticky top-0 z-10 flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        Settings
      </h1>
      <div className="flex flex-col gap-10 p-6">
        <div>
          <h2 className="text-2xl font-bold">User Profile</h2>
          <p className="text-base text-white/50">Add or update your information</p>
        </div>
        <ProfilePicture
          onDelete={removeProfileImage}
          userImage={user?.profileImage || ''}
          onUpload={uploadProfileImage} />

        <ProfileForm user={user} onUpdate={updateUserProfile} />
      </div>
    </div>
  )
}

export default SettingsPage