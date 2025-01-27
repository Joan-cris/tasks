import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [quizInProgress, setQuizInProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setQuizInProgress(true);
        setAttempts(attempts - 1);
    }
    function stopQuiz(): void {
        setQuizInProgress(false);
    }
    function Mulligan(): void {
        setAttempts(attempts + 1);
    }

    return (
        <div>
            <div>
                Num Attempts: <span>{attempts}</span>
            </div>
            <div>
                <Button
                    onClick={startQuiz}
                    disabled={quizInProgress || attempts < 1}
                >
                    Start Quiz
                </Button>
                <Button onClick={stopQuiz} disabled={!quizInProgress}>
                    Stop Quiz
                </Button>
                <Button onClick={Mulligan} disabled={quizInProgress}>
                    Mulligan
                </Button>
            </div>
            <div>
                {attempts === 0 && quizInProgress ? (
                    <span> No more attempts, cannot start.</span>
                ) : (
                    <span>Go on.</span>
                )}
            </div>
        </div>
    );
}
