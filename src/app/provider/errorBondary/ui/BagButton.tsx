/* eslint-disable i18next/no-literal-string */
import React, { FC, useEffect, useState } from 'react';
import Button from 'shared/ui/Button/Button';


// компонент для тестирования
 
const BagButton: FC = () => {
    const [errors, setErrors] = useState(false);
    
    useEffect(() => {
        if (errors) {
            throw new Error()
        }
    }, [errors])

    const onBag = () => setErrors((val) => !val)

    return (
        <Button onClick={onBag}>
            error        
        </Button>
    );
};

export default BagButton;