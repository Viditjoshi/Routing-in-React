import React from 'react'
import { useLoaderData } from 'react-router-dom';
function Github() {
  const data =  useLoaderData();
  return ( 
    <div className='text-center m-4 bg-gray-600 text-White p-4 text-[30px] text-white '>
      Github followrs : {data.followers}
      <div className="flex w-[100%]">
        <div className="w-[20%]">
            <img src={data.avatar_url} alt="git picture" width={300} height={300}  className='p-4'/>
        </div>
          <div className="w-[80%] flex-auto">
                <p className="absolute top-[10rem]">Name : {data.name}</p>
                <p className="absolute top-[13rem]">Address : {data.location}</p>
                <p className="absolute top-[16rem]">About Me:</p>
                <p className="absolute top-[19rem]">{data.bio}</p>
                <a href='https://github.com/viditjoshi'> <button className='absolute top-[23rem] left-[21rem] border-2 p-2 bg-slate-500 border-blue-500 rounded-lg text-lg'>Profile Visit</button></a>
          </div>
      </div>
    </div>
  )
}

export default Github

export const githubinfo = async () => {
 const response =  await  fetch('https://api.github.com/users/viditjoshi')
    return response.json();
}