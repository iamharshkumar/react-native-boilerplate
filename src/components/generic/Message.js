import React, { useState } from 'react';
import { Snackbar } from 'react-native-paper';

export let message;

function Message() {
    const [visible, setVisible] = useState(false);

    const [title, setTitle] = useState('');
    const [onSurfaceColor, setOnSurfaceColor] = useState('#000');

    const helper = (title, onSurfaceColor) => {
        setVisible(true);
        setTitle(title);
        setOnSurfaceColor(onSurfaceColor);
    };

    message = {
        success: (title) => {
            helper(title, 'green');
        },
        error: (title) => {
            helper(title, 'red');
        },
    };

    const onDismissSnackBar = () => setVisible(false);

    return (
        <>
            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                duration={1000}
                action={{
                    label: 'Close',
                    onPress: () => {
                        onDismissSnackBar();
                    },
                }}
                theme={{
                    colors: {
                        surface: '#fff',
                        accent: '#fff',
                        onSurface: onSurfaceColor,
                    },
                }}
                style={{
                    zIndex: 99999,
                }}
            >
                {title}
            </Snackbar>
        </>
    );
}

export default Message;
