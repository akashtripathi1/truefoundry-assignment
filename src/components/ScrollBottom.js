import React, { useCallback, useState, useEffect } from 'react';
import { Button } from '@mui/material';

const ScrollBottom = ({ targetRef }) => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    const scrollToBottom = useCallback(() => {
        if (targetRef.current) {
            targetRef.current.scrollTo({
                top: targetRef.current.scrollHeight,
                behavior: 'smooth',
            });
        }
    }, [targetRef]);

    const checkScroll = useCallback(() => {
        if (targetRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = targetRef.current;
            const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
            setShowScrollButton(!isAtBottom);
        }
    }, [targetRef]);

    useEffect(() => {
        const target = targetRef.current;
        target?.addEventListener('scroll', checkScroll);

        return () => {
            target?.removeEventListener('scroll', checkScroll);
        };
    }, [checkScroll, targetRef]);

    return showScrollButton ? (
        <Button
            onClick={scrollToBottom}
            sx={{
                position: 'fixed',
                bottom: 20,
                right: 20,
                zIndex: 1500,
            }}
        >
            Scroll to Bottom
        </Button>
    ) : null;
};

export default ScrollBottom;


// const scrollToLogItem = useCallback((timestamp) => {
//     if (logsRef.current) {
//       const logItem = logsRef.current.querySelector(`[data-timestamp="${timestamp}"]`);
//       if (logItem) {
//         logItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
//       }
//     }
//   }, []);