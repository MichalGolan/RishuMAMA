import './App.css'
import React, {useRef} from "react";
import SidePanel from './components/side panel/SidePanel';
import {WeeklyPlanner} from "./components/week-plan/WeeklyPlanner";
import {Container, Row, Col} from "../node_modules/react-bootstrap/esm/index";
export function App() {
    const ref = useRef(null);
    const temp = "John";
    return (
        <div className="App" >
            <Container>
                <Row>
                    <Col sm={6}>
                         <div style={{ width: 700, height: 400, position: 'relative' }} ref={ref}>
                            <WeeklyPlanner name={temp} parentRef={ref} />
                        </div>
                    </Col>
                    <Col sm={6}>
                        <SidePanel />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
