import { ComponentProps } from 'react';
import { FontAwesome } from '@expo/vector-icons';

export default function TabBarIcon(props: { name: ComponentProps<typeof FontAwesome>['name']; color: string }) {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
