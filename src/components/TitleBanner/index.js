import React, { useState } from 'react'

const TitleBanner = ({ title, styles }) => {

  return (
    <h2 style={{ ...styles }}>
      {title}
    </h2>
  )
}

export default TitleBanner