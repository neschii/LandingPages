'use client'
import TitleSlogan from '@/components/landing/TitleSlogan'
import BgContainer from '@/components/shared/BgContainer'
import TeamService from '@/components/servico/TeamService'

import React from 'react'

export default function Landing() {
  return (
    <div>
      <TitleSlogan />
        <BgContainer img="/banners/servicesbg.jpeg">
          <TeamService /> 
        </BgContainer>

        
    </div>
  )
}
