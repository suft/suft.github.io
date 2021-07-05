import React from 'react'
import moment from 'moment'

const Footer = () => {
  return (
    <footer className="pt-12 flex justify-center">
      <small>Copyright &copy;{moment().year()}, Sufien Tout</small>
    </footer>
  )
}

export default Footer