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
import {FileUploader} from '@/components';




export default function Home() {
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
  const [uploadedFiles, setUploadedFiles] = useState<File[] | null>([]);
  
    const handleFilesUploaded = (acceptedFile:File[]|null) => {
      setUploadedFiles(acceptedFile); 
    };



  return (
    <main className=' flex flex-row h-screen   w-full'>
      <Navside editClick={toggleEdit} botName={botName} active='Announcements' toggle={toggleMenu} />
      {editClick && <Editname editClick={toggleEdit} setBotName={handleBotName} />}
      <Container menuClick={toggleNav} active={toggleMenu}>
        <Heading icon='/whitecustomcommand.svg' title='Announcements' description='Create automatic announcements for unique events in your server'/>
        <div className='w-full flex flex-col mt-6'>
          <h1 className='w-full font-bold text-lg '>New Announcement</h1>
          <div className='p-6 w-full bg-[#F9F9F9] flex flex-col mt-5 rounded-xl '>
            <form action="" className='w-full gap-5 flex flex-col '>
              <div className='w-full bg-white flex flex-col rounded-lg'>
                <InputElement type='text' label='Announcement Name' placeholder='New Bot Features' name='command'/>
                <InputElement type='text' label='Announcement Message' placeholder='eg: Greeting channel' name='Author'/>
                <InputElement type='text' label='Thumbnail' placeholder='Thumbnail URL' name='Author'/>
                <InputElement type='text' label='Title' placeholder='Title' name='Author'/>
                <label htmlFor="message" className='text-sm font-semibold'>Message</label>
                <textarea name="Message" id="message" className='w-full indent-4 bg-indigo-600/5 pt-4 mb-5 h-32 focus:outline-0 rounded-md mt-2' placeholder="Your message" ></textarea>
                <InputElement type='text' label='Image' placeholder='Image URL' name='Author'/>
                
                <FileUploader onFilesUploaded={handleFilesUploaded}/>
                <ul>
                    {uploadedFiles && uploadedFiles.map((file) => (
                    <li key={file.name}>{file.name}</li>
                    ))}
                </ul>
                <InputElement type='text' label='Footer' placeholder='Footer' name='Author'/>
                <InputElement type='text' label='Embed URL' placeholder='Embed URL' name='Author'/>
                <label htmlFor=""></label>
                <select name="channel" id="channel" placeholder='Channels' className='w-full border-2 rounded-lg mt-10 border-indigo-600 py-3 indent-3 '>
                <option value="members" className='py-4 hover:bg-indigo-600'>Members</option>
            </select>


              </div>
              <CustomButton title='Enable Command' btnType='submit' containerStyles='w-full'/>
            </form>
          </div>

        </div>
        <div className='w-full flex flex-col mt-6'>
          <div className='flex justify-between w-full items-center'>
            <h1 className='font-bold text-lg '>Your commands</h1>
            <form action="" className='w-60'>
              <ContactInput icon='/search.svg' type='text' name='commandsearch' placeholder='Search' Width='72'/>
            </form>
          </div>
          <div className='w-full flex flex-col gap-3 mt-10'>
            <Command/>
            <Command/>
            <Command/>
            <Command/>
          </div>
        
          
        </div>
      </Container>
    </main>
  );
}

