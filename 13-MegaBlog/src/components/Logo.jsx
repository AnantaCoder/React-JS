import React from 'react';

function Logo({ width = '100px', height = 'auto', alt = 'Logo', src = '' }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {src ? (
                <img src={src} alt={alt} style={{ width, height }} />
            ) : (
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Logo</span>
            )}
        </div>
    );
}

export default Logo;