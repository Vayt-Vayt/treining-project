/* eslint-disable i18next/no-literal-string */
import React from 'react';
import { useSelector } from 'react-redux';
import Button from 'shared/ui/Button/Button';
import { useAppDispatch } from "app/provider/storeProvider/index"
import { counterActions } from '../model/slice/CounterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';


export const Counter = () => {
    const value = useSelector(getCounterValue)
    const dispatch = useAppDispatch()

    const increment = () => {
        dispatch(counterActions.increment())
    }

    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div data-testid="value-title">
            {value}    
            <br />
            <Button 
                data-testid= "increment-btn"
                onClick={increment}
            >
                increment
            </Button>        
            <Button 
                data-testid= "decrement-btn"
                onClick={decrement}
            >
                decrement
            </Button>        
        </div>
    );
};

