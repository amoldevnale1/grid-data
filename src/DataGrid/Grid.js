import './Grid.css';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
const gridData = require("./data.json");
function Grid() {

  const [state, setState] = useState({ receipent: "", message: "", from: "", to: "", isin: "", vp: "", order: "", eventType: "", official: "", business: "" });

  return (
    <Container className='grid-section'>
      <Row>
        <h4>
            {gridData.totalRecords} results found
        </h4>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th className='long-header'>Receipient BIC</th>
                <th className='long-header'>Message Type</th>
                <th className='long-header'>From Date</th>
                <th className='long-header'>To Date</th>
                <th className='long-header'>ISIN</th>
                <th className='long-header'>VP Account</th>
                <th className='long-header'>Order Reference</th>
                <th className='long-header'>Event Type</th>
                <th className='long-header'>Official Order Reference</th>
                <th className='long-header'>Business Message Identifier</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Form.Control type="text" value={state.receipent}
                  onChange={(ev) => {
                    setState({ ...state, receipent: ev.target.value });
                  }} /></td>
                <td><Form.Control type="text" value={state.message}
                  onChange={(ev) => {
                    setState({ ...state, message: ev.target.value });
                  }}
                /></td>
                <td><Form.Control type="text" value={state.from}
                  onChange={(ev) => {
                    setState({ ...state, from: ev.target.value });
                  }} /></td>
                <td><Form.Control type="text" value={state.to}
                  onChange={(ev) => {
                    setState({ ...state, to: ev.target.value });
                  }} /></td>
                <td><Form.Control type="text" value={state.isin}
                  onChange={(ev) => {
                    setState({ ...state, isin: ev.target.value });
                  }} /></td>
                <td><Form.Control type="text" value={state.vp}
                  onChange={(ev) => {
                    setState({ ...state, vp: ev.target.value });
                  }} /></td>
                <td><Form.Control type="text" value={state.order}
                  onChange={(ev) => {
                    setState({ ...state, order: ev.target.value });
                  }} /></td>
                <td><Form.Control type="text" value={state.eventType}
                  onChange={(ev) => {
                    setState({ ...state, eventType: ev.target.value });
                  }} /></td>
                <td><Form.Control type="text" value={state.official}
                  onChange={(ev) => {
                    setState({ ...state, official: ev.target.value });
                  }} /></td>
                <td><Form.Control type="text" value={state.business}
                  onChange={(ev) => {
                    setState({ ...state, business: ev.target.value });
                  }} /></td>
              </tr>
                  {
                    gridData.data.map((rec, index) => {
                      return (
                      <tr key={index}>
                          <td>
                            {rec.receipent}
                          </td>
                          <td>
                            {rec.message}
                          </td>
                          <td>
                            {rec.from}
                          </td>
                          <td>
                            {rec.to}
                          </td>
                          <td>
                            {rec.isin}
                          </td>
                          <td>
                            {rec.vp}
                          </td>
                          <td>
                            {rec.order}
                          </td>
                          <td>
                            {rec.eventType}
                          </td>
                          <td>
                            {rec.official}
                          </td>
                          <td>
                            {rec.business}
                          </td>
                        </tr>
                      )
                    })
                  }
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default Grid;
