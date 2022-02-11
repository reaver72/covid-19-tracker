import { Bar } from "react-chartjs-2"

const Chart = ({ barData }) => {

        var barChart =
            (<Bar
                
                data={{
                    labels: ["infected", "recovered", "deaths"],
                    datasets: [{
                        label: "People",
                        backgroundColor: [
                            "rgba(20,50,255,0.7)", "rgba(20,255,50,0.7)", "rgba(255,20,20,0.7)"
                        ],
                        data: [barData.confirmed, barData.recovered, barData.deaths]
                    
                    }]

                }}

                options={{
                    scales: {
                        y: {
                            ticks: {
                                color: "white"
                            },
                            grid: {
                                color: "#393a3b"
                            },
                           
                        },
                         x: {
                                ticks: {
                                    color: "white"
                             },
                              grid: {
                                color: "#393a3b"
                            },
                            }
                    }
                }}
            />
            )
    return (
       
        <div className='xl:ml-96 xl:w-7/12 md:mt-24 mt-5 lg:mt-20 mr-16 h-full md:w-9/12 md:ml-36 w-full m-2 p-1'>
            <div className='lg:ml-20'>
            {barChart}

            </div>

    </div>
  )
}

export default Chart