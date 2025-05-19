
import MainHeading from '@/components/main-heading'
import React from 'react'
import { db } from "../../lib/prisma"
import Menu from '@/components/menu'

const  BestRental =async() => {

  
  const bestRental = await db.car.findMany({
   
    include: {
      extras: true,
      durations: true,
    },
  })
console.log(bestRental);

 
  return (
    <section>
        <div className='container'>

            <div className='text-center mb-4'>  <MainHeading subTitle='checkout' title='Our Best Rental'/> </div>
            
             <Menu cars={bestRental} />
          

        </div>
    </section>
  )
}

export default BestRental