"use client"

import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';

interface FileUploaderProps {
  onFilesUploaded: (acceptedFiles: File[]) => void;
}

const FileUploader = ({ onFilesUploaded }: FileUploaderProps) => {
  const [filePreview, setFilePreview] = useState<string | null>(null);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      // Assuming only one file is selected
      const file = acceptedFiles[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setFilePreview(e.target?.result as string);
        };
        reader.readAsDataURL(file);
      }
      onFilesUploaded(acceptedFiles);
    },
  });

  return (
    <div {...getRootProps()} className="dropzone h-96 bg-indigo-600/5 rounded-md cursor-pointer border-dashed border border-gray-400 mt-5 items-center flex justify-center">
      <input {...getInputProps()} />
      {filePreview ? (
        <div className='w-full h-full overflow-hidden border '>
          <Image src={filePreview} alt="File Preview" width={1000} height={1000} className='w-full ' />
        </div>
      ) : (
        <div className='flex flex-col gap-4 items-center justify-center '>
            <Image src="/imagedrop.svg" alt="drop" width={40} height={40} />
          <p className='text-[#9A9A9A]'>Drag & Drop files here or click to select</p>
        </div>
      )}
    </div>
  );
}

export default FileUploader;

