import React, { useState } from 'react'
import Card from './Cards/Card'
import CountryOption from './CountryOption/CountryOption';

const TopCards = ({ dailyData, globalCases, countryHandler, fetchedCountries, data, className }) => {
    const [isglobal, setIsGlobal] = useState(true)
    
    const optionValue = (country)=>{
        if (country === "Global") {
            setIsGlobal(true)
        }
        else {
            setIsGlobal(false)
        }
    }

  return (
      <div className="md:ml-96 lg:max-w-36 sm:max-h-full xl:block lg:grid lg:grid-cols-1 md:mt-0 mt-96 lg:min-h-screen xl:min-h-0  md:mr-5 px-2 sm:px-4 py-2.5 rounded-lg dark:bg-gray-800">
        <div className="lg:ml-30 lg:max-w-36 lg:max-h-36 container  md:mt-0 mt-80  flex flex-wrap lg:justify-evenly items-center mx-auto">
              <Card className="bg-purple-500 h-1 mt-4" text={"Number of new cases of today"} title={"New Cases"} date={new Date(globalCases.date).toDateString() } cases={isglobal? globalCases.newCases: dailyData.cases.new || 0 }/>
              <Card className="bg-red-500 h-1 mt-4" text={"Number of new deaths of today"} title={"New Deaths"} date={new Date(globalCases.date).toDateString() } cases={ isglobal?globalCases.newDeaths: (dailyData.deaths.new)||0}/>

              <Card className="bg-yellow-500 h-1 mt-4" text={"Number of active corona patient cases "} title={"Active Cases"} date={new Date(globalCases.date).toDateString()} cases={isglobal?globalCases.newActiveCases: dailyData.cases.active || 0} />
          </div>
          <CountryOption countryHandler={countryHandler} fetchedCountries={fetchedCountries} optionValue={ optionValue}/>

      </div>
  )
}

export default TopCards
