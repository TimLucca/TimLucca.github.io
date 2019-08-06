import React from 'react'

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>Tim Lucca</h1>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '2rem'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  padding: '1rem'
}