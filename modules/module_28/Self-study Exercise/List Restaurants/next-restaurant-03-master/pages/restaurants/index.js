import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from 'next/Link'

export default function Home() {
  const restaurants = [
    {name: 'WoodsHill'},
    {name:'Fiorellas'},
    {name: 'Karma'}
  ]
  return (
    <h1>Restaurant Top Page!</h1>
    )
}
