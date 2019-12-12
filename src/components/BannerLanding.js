import React from 'react'
import MunchmatesSVG from '../assets/images/munchmates.png'
import styled from '@emotion/styled'

const Logo = () => <img src={MunchmatesSVG}></img>
const MunchmatesLogo = styled(Logo)`
  width: 300px !important;
`

const BannerLanding = props => (
  <section id="banner" className="style2">
    <div className="inner">
      <header className="major">
        <MunchmatesLogo />
      </header>
      <div className="content">
        <p>
          Our goal was to create the next best way for working professionals to
          meet new people — at the dinner table.
        </p>
      </div>
    </div>
  </section>
)

export default BannerLanding
