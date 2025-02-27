import { FC } from 'react';
import { RadioGroup } from '@project-1114/ui-kit';

export const ChoosePresets: FC = () => {
    return (
        <RadioGroup
            name={'preset'}
            onChange={handleChangePreset}
            options={[
                {
                    value: '1',
                    description: 'Самп',
                    defaultChecked: true,
                },
                { value: '2', description: 'Гта5' },
                { value: '3', description: 'Гта6' },
                { value: '4', description: 'Гта7' },
                { value: '5', description: 'Гта8' },
                { value: '6', description: 'Гта9' },
            ]}
        />
    );
};
