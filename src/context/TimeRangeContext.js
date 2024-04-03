import React, { createContext, useState, useContext } from 'react';

const TimeRangeContext = createContext();

export const useTimeRangeContext = () => useContext(TimeRangeContext);

export const TimeRangeProvider = ({ children }) => {
    const [selectedTimeRange, setSelectedTimeRange] = useState('5m');

    return (
        <TimeRangeContext.Provider value={{ selectedTimeRange, setSelectedTimeRange }}>
            {children}
        </TimeRangeContext.Provider>
    );
};
