import './SearchPanel.css';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { useState } from 'react';

function SearchPanel() {
    const [state, setState] = useState({ receipent: "", message: "", isin: "", vp: "" });

    const reset = (ev) => {
        ev.preventDefault();
        setState({ receipent: "", message: "", isin: "", vp: "" });
    };

    return (
        <Container className='search-panel'>
            <Row>
                <Col>
                    <Form controlId="search-form">
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                    <td>
                                        <Form.Label>Recipient BIC</Form.Label>
                                        <Form.Control type="text" value={state.receipent}
                                            onChange={(ev) => {
                                                setState({ ...state, receipent: ev.target.value });
                                            }}
                                            placeholder="Enter Receipient BIC" />
                                    </td>
                                    <td>
                                        <Form.Label>Message Type</Form.Label>
                                        <Form.Select aria-label="Default select example" value={state.message}
                                            onChange={(ev) => {
                                                setState({ ...state, message: ev.target.value });
                                            }}>
                                            <option>Select Message Type</option>
                                            <option value="1">MT-199</option>
                                        </Form.Select>
                                    </td>
                                    <td>
                                        <Form.Label>ISIN</Form.Label>
                                        <Form.Control type="text" placeholder="Enter ISIN" value={state.isin}
                                            onChange={(ev) => {
                                                setState({ ...state, isin: ev.target.value });
                                            }} />
                                    </td>
                                    <td>
                                        <Form.Label>VP Account</Form.Label>
                                        <Form.Control type="text" placeholder="Enter VP Account" value={state.vp}
                                            onChange={(ev) => {
                                                setState({ ...state, vp: ev.target.value });
                                            }} />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <Container>
                            <Row>
                                <Col>
                                    <Stack direction="horizontal" gap={2}>
                                        <Button className="ms-auto p-2" variant="outline-danger" onClick={reset}>Reset</Button>
                                        <Button className="p-2" variant="danger">Search</Button>
                                    </Stack>
                                </Col>
                            </Row>
                        </Container>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default SearchPanel;
