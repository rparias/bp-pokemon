import React from 'react'
import InputField from '../../atoms/InputField/InputField'
import { TopBarContainer } from './TopBar.styles'

const TopBar = () => {
  return (
    <TopBarContainer>
      <h1>Listado de Pokemon</h1>
      <div className="topbar__container">
        <InputField placeholder="Buscar" />
        <button>Nuevo</button>
      </div>
    </TopBarContainer>
  )
}

export default TopBar
