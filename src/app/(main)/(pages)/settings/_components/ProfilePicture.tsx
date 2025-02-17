'use client'
import React from 'react'
import UploadCareButton from './UploadCareButton'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation'

type ProfilePictureProps = {
  userImage: string | null
  onUpload: (imagePath: string) => Promise<any>
  onDelete: () => Promise<any>
}

const ProfilePicture = ({ userImage, onDelete, onUpload }: ProfilePictureProps) => {

  const router = useRouter()

  const onRemoveProfileImage = async () => {
    const response = await onDelete()
    if (response) {
      router.refresh()
    }
  }

  return (
    <div className="flex flex-col ">
      <p className="text-lg text-white">Profile Picture</p>
      <div className="h-[30vh] flex flex-col items-center justify-center">
        {userImage ? <>
          <div className='relative aspect-square rounded-full overflow-hidden w-16'>
            <Image
              src={userImage}
              alt="User Avatar"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 60px,(max-width: 1200px) 80px,100px"
              priority
            />
          </div>
          <Button className="bg-transparent text-white/70 hover:bg-transparent hover:text-white" onClick={onRemoveProfileImage}>
            <X /> Remove Logo
          </Button>
        </> : <UploadCareButton onUpload={onUpload} />}

      </div>
    </div>
  )
}

export default ProfilePicture