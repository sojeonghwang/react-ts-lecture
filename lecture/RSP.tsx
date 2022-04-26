import * as React from 'react';
import { useState, useRef, useEffect } from 'react';

const rspCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px'
};

const scores = {
    가위: 1,
    바위: 0,
    보: -1
};

const computerChoice = (imgCoords) => {
    return Object.kets(rspCoords).find((k) => {
        return rspCoords[k] === imgCoords
    })
};
