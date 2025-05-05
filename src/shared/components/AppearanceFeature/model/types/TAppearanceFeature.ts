import React, { ReactElement } from 'react';

export type TAppearanceFeature = {
    label: string;
    icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    description: ReactElement;
};
