import React from 'react'
import moment from 'moment'
import { E } from './Tags'

const Footer = () => {
  return (
    <footer className="pt-12 flex justify-center text-center">
      <p>
        <small>
          Made with <E>❤️</E> in <strong>Barrie</strong>
        </small>
        <br />
        <small>
          Copyright &copy; {moment().year()} Sufien Tout
        </small>
      </p>
    </footer>
  )
}

export default Footer