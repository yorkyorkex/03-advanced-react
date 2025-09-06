import React from 'react'
import avatar from '../../../assets/default-avatar.svg'
export function Person({ name, nickName = 'shakeAndBake', images }) {
  return (
    <div>
      <h4>{name}</h4>
      <p>Nickname : {nickName}</p>
      <img
        style={{ width: '100px', height: '100px' }}
        src={images?.[0]?.small?.url || avatar}
      />
    </div>
  )
}
