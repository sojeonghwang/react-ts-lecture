import * as React from 'react';
import { FunctionComponent } from 'react';
import { TryInfo } from './types'

// 방법 1
// const Try = ({ tryInfo }: { tryInfo: TryInfo }) => {
// 방법 2(react 할 때 더 많이 이렇게 씀)
const Try: FunctionComponent<{ tryInfo: TryInfo }> = ({ tryInfo }) => {
    return (
        <li>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>
        </li>
    )
};

export default Try;