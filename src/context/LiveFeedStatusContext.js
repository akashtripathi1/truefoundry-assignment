// src/context/LiveFeedStatusContext.js

import React, { createContext, useState, useContext } from 'react';

const LiveFeedStatusContext = createContext();

export const LiveFeedStatusProvider = ({ children }) => {
    const [isLive, setIsLive] = useState(true);

    return (
        <LiveFeedStatusContext.Provider value={{ isLive, setIsLive }}>
            {children}
        </LiveFeedStatusContext.Provider>
    );
};

export const useLiveFeedStatus = () => useContext(LiveFeedStatusContext);
