import React, { useState } from "react";
import { useRouter } from "next/router";
import { DropzoneOptions, useDropzone } from "react-dropzone";
import { FaGoogleDrive, FaDropbox, FaFonticons } from "react-icons/fa";

const UploadComponent: React.FC = () => {
  const router = useRouter();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileSelection = (acceptedFiles: File[]) => {
    setSelectedFiles(acceptedFiles);
  };

  const handleFileUpload = () => {
    // Your upload logic here

    router.push("/success");
  };

  const dropzoneOptions: DropzoneOptions = {
    accept: ["image/*", ".pdf", ".doc", ".docx", ".txt"],
    onDrop: handleFileSelection,
    multiple: true,
  };

  const { getRootProps, getInputProps } = useDropzone(dropzoneOptions);

  return (
    <div className="p-4 space-y-4">
      <div
        {...getRootProps({
          className: "dropzone border-2 border-dashed border-gray-400 p-4",
        })}
      >
        <input {...getInputProps()} />
        <p className="text-gray-600">
          Drag and drop files here, or click to select files
        </p>
      </div>
      <div>
        <h3 className="text-lg font-bold">Selected Files:</h3>
        {selectedFiles.map((file, index) => (
          <p key={index} className="text-gray-800">
            {file.name}
          </p>
        ))}
      </div>
      <div>
        <h3 className="text-lg font-bold">Integrations:</h3>
        <div className="flex space-x-4">
          <FaGoogleDrive size={24} />
          <FaFonticons size={24} />
          <FaDropbox size={24} />
        </div>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={handleFileUpload}
      >
        Upload Files
      </button>
    </div>
  );
};

export default UploadComponent;
