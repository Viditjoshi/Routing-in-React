import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
function User() {
    const { id } = useParams();
  return (
    <div className='text-center m-4 bg-gray-600 text-White p-4 text-3x1'>
      user {id}
    </div>
  )
}

export default User

