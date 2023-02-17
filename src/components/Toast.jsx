import React from 'react'
import {RxCross2} from 'react-icons/rx'


const Toast = () => {
  return (
    <div className='bg-[#f2dede] text-[#a94442] border border-solid border-[#ebccd1]'>
      <div className=' flex items-center gap-2  p-[15px]'>
        <span><RxCross2/></span>
        <p>Incorrect Login details</p>
      </div>
    </div>
  )
}

export default Toast