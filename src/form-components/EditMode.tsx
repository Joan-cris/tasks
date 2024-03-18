import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your name is a student:");
    const [studentStat, setStudentStat] = useState<boolean>(true);

    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateStudentStat(event: React.ChangeEvent<HTMLInputElement>) {
        setStudentStat(event.target.checked);
    }

    function editM(): JSX.Element {
        return (
            <Form.Group controlId="editMode">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                    type="string"
                    value={name}
                    onChange={updateName}
                />
            </Form.Group>
        );
    }

    return (
        <div>
            <div>
                <Form.Check
                    type="switch"
                    id="inEditMode"
                    label="Edit Mode"
                    checked={edit}
                    onChange={updateEdit}
                />
                <div>
                    The user is {edit ? "in Edit Mode" : "not in Edit Mode"}.{" "}
                </div>
                {edit ? editM : ""}
            </div>
            {edit ? (
                <Form.Group controlId="editName">
                    <Form.Label>New Name:</Form.Label>
                    <Form.Control
                        type="string"
                        value={name}
                        onChange={updateName}
                    />
                </Form.Group>
            ) : (
                <div></div>
            )}
            {edit ? (
                <Form.Check
                    type="checkbox"
                    id="studentStatus"
                    label="Are you a student?"
                    checked={studentStat}
                    onChange={updateStudentStat}
                />
            ) : (
                <div>
                    {name} {studentStat ? "is" : "is not"} a student.
                </div>
            )}
        </div>
    );
}
