import React from 'react'

interface RowType{
    title: string;
    value: string
}

const Row: React.FC<RowType> = ({ title, value }) => {
  return (
    <div className='flex max-w-[300px]'>
      <p className='text-[#999999] text-[16px] font-medium mr-3'>{title}</p>
      <p className='text-[#161A1D] text-[16px] font-light w-[150px]'>{value}</p>
    </div>
  )
}

export default Row