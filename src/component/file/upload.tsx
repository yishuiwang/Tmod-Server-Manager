import React, { useState } from 'react';

export default function upload() {
  const [uploadUrl, setUploadUrl] = useState('');
  const [fileList, setFileList] = useState([]);
  const uploadProps = {
    name: 'file',
    action: '/api/uploadFile',
    fileList: fileList,
    onChange(info: { fileList?: any; file?: any }) {
      const { file } = info;
      // 判断当前状态
      if (file.status === 'done') {
        const {
          response: { url },
        } = file;
        setUploadUrl(url);
      } else if (file.status === 'error') {
        // do something
      }
      // 只显示一个 上传文件
      setFileList(info.fileList.slice(-1));
    },
  };
  return {
    uploadProps,
    uploadUrl,
    fileList,
  };
}
