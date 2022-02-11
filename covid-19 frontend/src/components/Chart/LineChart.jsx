import React, { useEffect, useState } from 'react'
import { fetchDailyData } from '../../api'
import { Line} from "react-chartjs-2"
import { Chart as ChartJS } from 'chart.js/auto'
const LineChart= () => {

    const [dailyData, setDailyData] = useState([])

  
    useEffect(async () => {
        const fetchedDailyData = await fetchDailyData()
        setDailyData(fetchedDailyData)
       
    }, [])


    const lineChart = (
        <Line
            data={
                {
                    labels: dailyData.map(({date})=> date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: "infected",
                        borderColor: "rgb(71, 138, 245)",
                        fill:true
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: "deaths",
                        borderColor: "rgb(235,47,26)",
                        fill:true
                        }]
                    
                }
                
            }
            options={{
                    scales: {
                        y: {
                            ticks: {
                                color: "#e0e0d1"
                            }
                           
                        },
                         x: {
                                ticks: {
                                    color: "#e0e0d1"
                             }
                            }
                    }
                }}
        />
    )
    return (
        <>
            <hr />
            <h1 className='text-center text-2xl mt-16 mb-5 underline '>Historical Data</h1>
        <div className='bg-gray-800 m-2 rounded-sm mb-3'>
            {lineChart }
            </div>
       </>
            
  )
}

export default LineChart