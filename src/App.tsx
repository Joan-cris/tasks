import React from "react";
import "./App.css";
<<<<<<< HEAD
import udimage from "./udimage.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
>>>>>>> upstream/task-state

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <h2>Joanna Crisomia</h2>
                <img src={udimage} alt="UD logo" />
            </header>
<<<<<<< HEAD
            <p>Hello World</p>
            <ul>
                <li>Class of 2024</li>
                <li>Computer Science & Cognitive Science</li>
                <li>Computational, Mathematical, and Logical Foundations</li>
            </ul>
            <Container>
                <Row>
                    <Col>Organizations</Col>
                    <Col>Activities</Col>
                </Row>
                <Row>
                    <Col>Alpha Omega Epsilon</Col>
                    <Col>Blue Hen Leadership Program</Col>
                </Row>
                <Row>
                    <Col>Hellenic Student Association</Col>
                    <Col>MLB Software Engineering</Col>
                </Row>
                <div>
                    <Row>
                        <Col>
                            <div id="rectangle"></div>
                        </Col>
                        <Col>
                            <div id="rectangle"></div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
