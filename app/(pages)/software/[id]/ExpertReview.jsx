import React from 'react'
import ProgressBar from './ProgressBar'
import ProsCons from './ProsCons'

export default function ExpertReview({software}) {
  return (
    <>
    <div className='text-2xl font-bold'>ExpertReview</div>
    <ProgressBar software={software}/>
    <ProsCons expretProsCons={software.expertReview || []}/>
    <h2 className='text-2xl font-bold py-5'>Customer Support</h2>
    <p>{software.customerSupport}</p>

    <h2 className='text-2xl font-bold py-5'>Ease Of Use</h2>
    <p>{software.easeOfUse}</p>

    <h2 className='text-2xl font-bold py-5'>verdict</h2>
    <p>{software.verdict}</p>
    <h2 className='text-2xl font-bold py-5'>promotions</h2>
    <p>{software.promotions}</p>

    </>
  )
}
