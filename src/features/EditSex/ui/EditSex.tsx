import { FC } from 'react';
import { RadioGroup } from '@project-1114/ui-kit';

export const EditSex: FC = () => {
    return (
        <RadioGroup
            name={'sex'}
            onChange={handleChangeSex}
            options={[
                {
                    value: '1',
                    description: 'Мужской',
                    defaultChecked: true,
                },
                { value: '0', description: 'Женский' },
            ]}
        />
    );
};
