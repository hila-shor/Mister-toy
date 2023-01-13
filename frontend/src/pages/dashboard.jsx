import React from 'react'
import { Doughnut, PolarArea } from 'react-chartjs-2'
import {  useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale } from 'chart.js' 
import { loadToys, removeToy }from '../store/toy.action'
import { toyService } from '../services/toy.service.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'


ChartJS.register(RadialLinearScale,ArcElement, Tooltip, Legend)

export function Dashboard(){

  
const toys = useSelector((storeState) => storeState.toyModule.toys)
const [filterBy, setFilterBy] = useState(toyService.getDefaultFilter())
console.log(toys)

useEffect(() => {
  loadToys(filterBy)
        .then(() => {
            showSuccessMsg('Toys loaded')
        })
        .catch(err => {
            showErrorMsg('Cannot load Toys')
        })
}, [])

function setDataToChart() {
  const toysLabels = toys.map(toy => toy.type).flat()
  console.log(toysLabels)
  const toysByLabel = toysLabels.reduce((acc, type) => {
      acc[type] = acc[type] ? ++acc[type] : 1
      return acc
  }, {})
  const labelsList = Object.keys(toysByLabel)
  const values= Object.values(toysByLabel)

  return {labelsList:labelsList , values:values}
}

const labels= setDataToChart()
console.log(labels)
const data = {
  labels: labels.labelsList,
  datasets: [
      {
          label: 'number of in Stock toys ',
          data: labels.values,
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 2,
      },
  ],
}

  return (
  <>
    <header>Our toy information board</header>
    <section style={{width:'60%', margin:'auto'}}>
      <Doughnut data={data}/>
    </section>
  </>
  )
}

