import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAns(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <div>
                <h3>Check Answer</h3>
            </div>
            <div>
                <Form.Group controlId="formCheck">
                    <Form.Label>Answer:</Form.Label>
                    <Form.Control value={answer} onChange={updateAns} />
                </Form.Group>
                {answer === expectedAnswer ? "✔️" : "❌"}
            </div>
        </div>
    );
}
