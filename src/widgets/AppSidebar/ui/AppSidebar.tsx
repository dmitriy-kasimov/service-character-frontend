import { FC, memo } from 'react';
import { SidebarItemType, Text } from '@tr271v0r/ui-tool-kit';

import { Sidebar } from '@tr271v0r/ui-tool-kit';

// import IconAuth from '@/shared/assets/icons/icon-auth.svg?react';
// import IconReg from '@/shared/assets/icons/icon-reg.svg?react';
// import IconRules from '@/shared/assets/icons/icon-rules.svg?react';
// import IconNews from '@/shared/assets/icons/icon-news.svg?react';

import { useNavigate } from 'react-router-dom';

import {
    getRouteAuthorization,
    getRouteNews,
    getRouteRegistration,
    getRouteRules,
} from '@/shared/const/router';

interface SidebarProps {
    className?: string;
}

export const AppSidebar: FC<SidebarProps> = memo((props) => {
    const { className } = props;

    const navigate = useNavigate();

    const sidebarItems: SidebarItemType[] = [
        {
            // Icon: <Icon Svg={IconAuth} />,
            desciption: <Text size="l">Authorization</Text>,
            onClick: () => navigate(getRouteAuthorization()),
        },
        {
            // Icon: <Icon Svg={IconReg} />,
            desciption: <Text size="l">Registration</Text>,
            onClick: () => navigate(getRouteRegistration()),
        },
        {
            // Icon: <Icon Svg={IconRules} />,
            desciption: <Text size="l">The rules</Text>,
            onClick: () => navigate(getRouteRules()),
        },
        {
            // Icon: <Icon Svg={IconNews} />,
            desciption: <Text size="l">News</Text>,
            onClick: () => navigate(getRouteNews()),
        },
    ];

    return <Sidebar items={sidebarItems} className={className} />;
});
