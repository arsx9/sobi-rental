import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange, RangeKeyDict } from 'react-date-range';
import '../styles/calendar-overrides.css'
import { useState } from 'react';

const DatePicker = () => {
    const today = new Date();

    const [date, setDate] = useState({
        startDate: today,
        endDate: today,
        key: 'selection',
        color: "#c31d2c"
    });

    const handleClear = () => {
        setDate({
            startDate: today,
            endDate: today,
            key: 'selection',
            color: "#c31d2c"
        });
    };

    const handleSelect = (ranges: RangeKeyDict) => {
        setDate(ranges.selection);
    };

    return (
        <div>
            <h3 className="text-xl font-semibold mt-12">Select check-in date</h3>
            <p className='text-gray-600 text-sm mb-5'>Add your travel dates for exact pricing</p>
            <DateRange
                ranges={[date]}
                onChange={handleSelect}
                months={2}
                direction="horizontal"
                preventSnapRefocus={true}
                calendarFocus="forward"
            />

            <div style={{ marginTop: '30px', textAlign: 'end' }}>
                <button
                    onClick={handleClear}
                    style={{
                        cursor: 'pointer'
                    }}
                    className="underline text-sm"
                >
                    Clear Dates
                </button>
            </div>
        </div>
    );
};

export default DatePicker;
