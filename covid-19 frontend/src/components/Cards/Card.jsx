import React from 'react'

const Card = ({text, title, cases, date, className}) => {
    return (
          <div className=" pt-5 lg:pt-3 min-h-9/12 lg:block lg:min-w-fit min-w-full     lg:ml-0 min-w-1/2  max-h-36 block flex-col mb-3 mx-2 my-1 lg:px-4 px-0 py-3 rounded-lg border  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-lg text-gray-700  dark:text-white">{title}</h5>
            <p className="font-normal text-gray-900 dark:text-gray-200">{cases }</p>
          <p className='dark:text-gray-400 mt-1'>{date}</p>
            <p className=''>{text}</p>
            <div className={className}/>

            {/* </div> */}

            </div>
            
  )
}

export default Card