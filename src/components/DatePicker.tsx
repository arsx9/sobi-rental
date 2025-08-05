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
    });

    const handleClear = () => {
        setDate({
            startDate: today,
            endDate: today,
            key: 'selection',
        });
    };

    const handleSelect = (ranges: RangeKeyDict) => {
        setDate(ranges.selection);
    };

    return (
        <div>
            <DateRange
                ranges={[date]}
                onChange={handleSelect}
                months={2}
                direction="horizontal"
                preventSnapRefocus={true}
                calendarFocus="forward"
            />

            <div style={{ marginTop: '10px', textAlign: 'center' }}>
                <button
                    onClick={handleClear}
                    style={{
                        padding: '8px 16px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        backgroundColor: '#f5f5f5',
                        cursor: 'pointer'
                    }}
                >
                    Reset to Today
                </button>
            </div>
        </div>
    );
};

export default DatePicker;
