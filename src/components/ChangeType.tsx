import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    const toType = (): void => {
        setQuestionType((previous) =>
            previous === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    };

    const theType = (): string => {
        return questionType === "multiple_choice_question"
            ? "Multiple Choice"
            : "Short Answer";
    };

    return (
        <div>
            <div>
                Current: <span>{questionType}</span>
            </div>
            <Button onClick={toType}>Change Type</Button>
            <div>
                <span>{theType()}</span>
            </div>
        </div>
    );
}
