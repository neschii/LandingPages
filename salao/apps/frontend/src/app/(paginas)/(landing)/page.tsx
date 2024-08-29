'use client'
import LandingPage from '@/components/landing/LandingPage'
import BgContainer from '@/components/shared/BgContainer'
import TeamService from '@/components/servico/TeamService'

import React from 'react'

export default function Landing() {
  return (
    <div>
      <LandingPage />
        <BgContainer img="/banners/servicesbg.jpeg">
          <TeamService /> 
        </BgContainer>

        
    </div>
  )
}
