'use client';

import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import InputField from '@/components/InputField';

const schema = z.object({
    username: z
        .string()
        .min(3, { message: 'Username must be at least 3 characters long' })
        .max(20, { message: 'Username must be less than 20 characters long' }),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
    firstname: z.string().min(1, { message: 'Firstname is required' }),
    lastname: z.string().min(1, { message: 'Lastname is required' }),
    phone: z.string().min(1, { message: 'Phone number is required' }),
    address: z.string().min(1, { message: 'Address is required' }),
    birthday: z.date({message: 'Birthday is required'}),
    gender: z.enum(['male', 'female'], {message: 'Gender is required'}),
    image: z.instanceof(File, { message: 'Image is required' }),
});



function TeacherForm({
    type,
    data,
}: {
    type: "create" | "update";
    data?: any;
}) {
    const { register, handleSubmit, formState: { errors } } = useForm({resolver: zodResolver(schema)});
    function onSubmit(data: any) {
        console.log(data);
    }
    return (
        <form action="" onSubmit={handleSubmit(onSubmit)} className='p-4 flex flex-col gap-4'>
            <h1 className="text-xl">Create a new Teacher</h1>            
            <span className='text-sm text-gray-500'>Authentification Information</span>

            <div className="flex justify-between gap-4 flex-wrap">
                <InputField
                    label="Username"
                    name="username"
                    type="text"
                    register={register}
                    defaultValue={data?.username}
                    error={errors.username}
                />

                <InputField
                    label="Email"
                    name="email"
                    type="email"
                    register={register}
                    defaultValue={data?.email}
                    error={errors.email}
                />

                <InputField
                    label="Password"
                    name="password"
                    type="password"
                    register={register}
                    defaultValue={data?.password}
                    error={errors.password}
                />            
            </div>

            <span className='text-sm text-gray-500'>Personal Information</span>
            <div className="flex justify-between gap-4 flex-wrap">
                <InputField
                    label="First Name"
                    name="firstname"
                    type="text"
                    register={register}
                    defaultValue={data?.firstname}
                    error={errors.firstname}
                />

                <InputField
                    label="Last Name"
                    name="lastname"
                    type="text"
                    register={register}
                    defaultValue={data?.lastname}
                    error={errors.lastname}
                />

                <InputField
                    label="Phone"
                    name="phone"
                    type="tel"
                    register={register}
                    defaultValue={data?.phone}
                    error={errors.phone}
                />

                <InputField
                    label="Address"
                    name="address"
                    type="text"
                    register={register}
                    defaultValue={data?.address}
                    error={errors.address}
                />

                <InputField
                    label="Birthday"
                    name="birthday"
                    type="date"
                    register={register}
                    defaultValue={data?.birthday}
                    error={errors.birthday}
                    />
            </div>

            <div className="flex justify-between gap-4 flex-wrap">
                <div className="flex flex-col gap-2 w-full md:w-1/4">
                    <label className='text-sm text-gray-500'>Gender</label>
                    <select {...register('gender')} className='ring-[1.5px] ring-gray-300 rounded-md p-2'>
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    {errors.gender && <p className='text-sm text-red-500'>{errors.gender.message?.toString()}</p>}
                </div>

                <div className="flex flex-col justify-center gap-2 w-full md:w-1/4">
                    <label htmlFor="image" className='text-xs text-gray-500 flex items-center gap-2 cursor-pointer'>
                        <Image src="/upload.png" alt="upload" width={24} height={24} />
                        <span>Upload Image</span>
                    </label>
                    <input 
                        id="image"
                        type='file'
                        {...register('image')}
                        className='hidden'
                    />
                    {errors.image && <p className='text-sm text-red-500'>{errors.image.message}</p>}
                </div>    
            </div>

            <button type='submit' className='bg-blue-500 text-white p-2 rounded-md'>{type === 'create' ? 'Create' : 'Update'}</button>
        </form>
    );

}

export default TeacherForm;