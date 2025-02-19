import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import '../styles/bootstrap.min.css'

import ML5ImageClassificationCard from '../components/cards/ML5ImageClassCard.js'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Row>
        <Col><ML5ImageClassificationCard /></Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
