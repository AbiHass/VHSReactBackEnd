import React from 'react'
import { MisOrdenesContainer } from './CardMyOrdersStyles'
import CardMyOrders from './CardMyOrders'
import { useSelector } from 'react-redux'

const CardsMyOrders = () => {
  const { orders } = useSelector(state => state.orders)

  return (
        <MisOrdenesContainer>
     {
        orders?.length ? (
          orders.map(order => <CardMyOrders key={order._id} {...order} />)
        ): (
          <h2>Aún no realizaste ningún pedido 😥</h2>
        )
      }


    </MisOrdenesContainer>
    
  )
}

export default CardsMyOrders