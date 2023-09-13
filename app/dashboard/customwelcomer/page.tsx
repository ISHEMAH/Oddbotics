"use client"
/* use client */
import React, { useState } from 'react';
import Navside from '@/components/Navside';
import Editname from '@/components/Editname';
import Container from '@/components/Container';
import { Heading } from '@/components';
import {CustomButton} from '@/components';
import {InputElement} from '@/components'
import {ContactInput} from '@/components';
import {Command} from '@/components'
import {FileUploader} from '@/components'

interface FileUploaderProps {
    acceptedFile: File[]
  }

export default function Home({acceptedFile}:FileUploaderProps) {
  const [editClick, setEditClick] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false)
  const toggleEdit = () => {
    setEditClick(!editClick);
  };
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
    console.log("adi")
  };
  const [botName, setBotName] = useState('');

  const handleBotName = (value: React.SetStateAction<string>) => {
    setBotName(value);

  };
  
  
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  
    const handleFilesUploaded = (acceptedFile:File[]) => {
      setUploadedFiles(acceptedFile);
    };


  return (
    <main className=' flex flex-row h-screen w-full'>
      <Navside editClick={toggleEdit} botName={botName} active='Custom Welcomer' toggle={toggleMenu} />
      {editClick && <Editname editClick={toggleEdit} setBotName={handleBotName} />}
      <Container menuClick={toggleNav} active={toggleMenu}>
        <Heading icon='/whitecustomwelcomer.svg' title='Custom Welcomer' description='Create custom welcomer'/>
        <div className='w-full flex flex-col mt-6'>
          <h1 className='w-full font-bold text-lg '>Create commands</h1>
          <div className='p-6 w-full bg-[#F9F9F9] flex flex-col mt-5 rounded-xl '>
            <form action="" className='w-full gap-5 flex flex-col '>
              <div className='w-full bg-white flex p-5 flex-col rounded-lg'>
              <label htmlFor="message" className='text-sm font-semibold'>Message</label>
                <textarea name="Message" id="message" className='w-full indent-4 bg-indigo-600/5 pt-4 mb-5 h-32 focus:outline-0 rounded-md mt-2' placeholder="Your message" ></textarea>
                <label htmlFor="banner" className='text-sm font-semibold'>Upload banner Image</label>
                <FileUploader onFilesUploaded={handleFilesUploaded}/>
                <ul>
                    {uploadedFiles.map((file) => (
                    <li key={file.name}>{file.name}</li>
                    ))}
                </ul>
              </div>
              <CustomButton title='Enable welcomer' btnType='submit' containerStyles='w-full'/>
            </form>
          </div>

        </div>
        <div className='w-full flex flex-col mt-6'>
          <div className='flex justify-between w-full items-center'>
            <h1 className='font-bold text-lg '>Your welcomer</h1>
          </div>
          
        </div>
      </Container>
    </main>
  );
}

