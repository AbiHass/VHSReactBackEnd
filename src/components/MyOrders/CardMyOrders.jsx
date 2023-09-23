import React from 'react'
import { CardId, CardPrice, CardTitle, InfoContainer, PedidoContainer } from './CardMyOrdersStyles'

const Orders = ({ createdAt, total, _id }) => {
  return (
    <PedidoContainer>
        <InfoContainer>
            <CardTitle>Número de orden: {_id.slice(0, 7)}</CardTitle>
            <CardId>Fecha {createdAt.slice(0, 10)} </CardId>
            <CardPrice>USD {total} </CardPrice>
        </InfoContainer>
    </PedidoContainer>
  )
}

export default Orders