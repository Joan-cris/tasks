import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const ops = options[0];
    const [selected, setSelected] = useState<string>(ops);

    function updateSelected(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelected(event.target.value);
    }
    return (
        <div>
            <div>
                <Form.Group controlId="test">
                    <Form.Label>Correct?</Form.Label>
                    <Form.Select value={selected} onChange={updateSelected}>
                        {options.map((choice: string) => (
                            <option key={choice} value={choice}>
                                {choice}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                {selected === expectedAnswer ? "✔️" : "❌"}
            </div>
        </div>
    );
}
