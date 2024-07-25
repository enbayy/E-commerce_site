import React from 'react'
import MainLayout from '../../../layout/MainLayoutPage/MainLayout'
import Navbar from '../../../components/navbar'

const DetailPageContainer = () => {
  return (
    <div>DetailPage</div>
  )
}
const DetailPage = () => {
  return (
    <MainLayout content={DetailPageContainer} header={<Navbar />} title={'Detail page'} />

  )
}
export default DetailPage
