import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(3);
    const [numRequests, setNumRequests] = useState<number>(0);

    function updateAns(event: React.ChangeEvent<HTMLInputElement>) {
        if (!isNaN(parseInt(event.target.value))) {
            setNumRequests(parseInt(event.target.value));
        }
    }
    function use() {
        setNumAttempts(numAttempts - 1);
    }

    function gain() {
        setNumAttempts(numRequests + numAttempts);
    }

    return (
        <div>
            <Form.Group controlId="Attempts">
                <Form.Label>Number of Attempts Requested:</Form.Label>
                <Form.Control
                    type="number"
                    value={numRequests}
                    onChange={updateAns}
                />
            </Form.Group>
            <Button onClick={use} disabled={numAttempts === 0}>
                use
            </Button>
            <Button onClick={gain}>gain</Button>
            <div>Number of Attempts Left: {numAttempts}</div>
        </div>
    );
}
