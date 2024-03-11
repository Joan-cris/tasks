import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎉" | "🎄" | "🐇" | "🎃" | "❤️";

const holidayYear: Record<Holiday, Holiday> = {
    "🎉": "🎄",
    "🎄": "🐇",
    "🐇": "🎃",
    "🎃": "❤️",
    "❤️": "🎉"
};

const holidayAlphabet: Record<Holiday, Holiday> = {
    "🎉": "🎄",
    "🎄": "🐇",
    "🐇": "🎃",
    "🎃": "❤️",
    "❤️": "🎉"
};

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setHoliday] = useState<Holiday>("🎉");

    const advanceByYear = (): void => {
        setHoliday(holidayYear[currentHoliday] as Holiday);
    };

    const advanceByAlphabet = (): void => {
        setHoliday(holidayAlphabet[currentHoliday] as Holiday);
    };

    return (
        <div>
            <div>Holiday: {currentHoliday}</div>
            <div>
                <Button onClick={advanceByYear}>Advance By Year</Button>
                <Button onClick={advanceByAlphabet}>Advance By Alphabet</Button>
            </div>
        </div>
    );
}
