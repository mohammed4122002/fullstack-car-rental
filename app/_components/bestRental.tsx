
import MainHeading from '@/components/main-heading'
import React from 'react'
import Menu from '@/components/menu'
import { getBestRental } from '@/server/db/cars'

const  BestRental =async() => {


  
  const bestRental = await getBestRental(3);

 
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