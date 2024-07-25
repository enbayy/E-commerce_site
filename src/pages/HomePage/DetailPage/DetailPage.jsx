import React from 'react'
import MainLayout from '../../../layout/MainLayoutPage/MainLayout'
import Navbar from '../../../components/navbar'
import { Link, Outlet, useParams } from 'react-router-dom'

export const DetailPageContainer = () => {
  return (
    <div>DetailPageContainer</div>
  )
}
export const DetailPage = () => {
  const params = useParams();
  return (
    <div>
      <div><Link to={``}>Container</Link></div>
      <div><Link to={"/info"}>Info</Link></div>
      <Outlet />
    </div>
  )
}

export const DetailPageInfo = () => {
  return (
    <div>DetailPageInfo</div>
  )
}

