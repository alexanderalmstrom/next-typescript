import React from 'react'
import Layout from './Layout'

type Props = {
  errors?: string
}

const Error = ({ errors }: Props) => (
  <Layout title="Error">
    <p>
      <span style={{ color: 'red' }}>Error:</span> {errors}
    </p>
  </Layout>
)

export default Error
