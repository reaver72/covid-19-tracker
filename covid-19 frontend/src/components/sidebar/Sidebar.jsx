import React from 'react'
import Card from '../Cards/Card'

const Sidebar = ({data, globalCases}) => {
  return (
   <div className="md:w-80 lg:h-full h-1/2 shadow-lg absolute grid gap-1 lg:mx-3 mx-0 my-2 w-full">

              <Card className="bg-blue-600 h-2 mt-3" text={"Total number of infected cases"} title={"Total Infected Cases"} date={new Date(globalCases.date).toDateString()} cases={data.confirmed} />
              <Card className="bg-green-500 h-2 mt-3" text={"Total number of recovered cases "} title={"Recovered Cases"} date={new Date(globalCases.date).toDateString()} cases={data.recovered} />
              <Card className="bg-orange-600 h-2 mt-3" text={"Number of critical cases "} title={"Critical Cases"} date={new Date(globalCases.date).toDateString()} cases={data.critical} />
              <Card  className="bg-red-600 h-2 mt-3" text={"Total number of deaths"} title={"Total Deaths"} date={new Date(globalCases.date).toDateString()} cases={data.deaths} />
          
</div>
  )
}

export default Sidebar
