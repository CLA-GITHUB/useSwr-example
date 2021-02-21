import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {getData} from '../lib/fetcher'

export default function Home() {
  const {names, isLoading, isError} = getData()
  
  if(isLoading){return (<h1>Loading</h1>)}
  if(isError){return (<h1>An error Occured</h1>)}
  return (
    <div>
      <p>You</p>
      {names.name}
    </div>
  )
}
