import Image from 'next/image';
import React from 'react';

export interface IProfile {
  name?: string | null;
  email?: string | null;
  imageUrl?: string | null;
}

const Profile: React.FC<IProfile> = ({ name, email, imageUrl }: IProfile) => {
  return (
    <>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Welcome to iProGG NextJS Starter Template
      </h2>
      <div className="flex items-center justify-between mt-14">
        {imageUrl && (
          <Image
            className="w-16 h-16 rounded-full border p-[2px]"
            width={80}
            height={80}
            layout="fixed"
            src={imageUrl}
            alt="user profile image"
          />
        )}
        <div className="flex-1 mx-4">
          <h2 className="font-bold">{name}</h2>
          <h3 className="text-sm text-gray-400">{email}</h3>
        </div>
      </div>
    </>
  );
};

export default Profile;
