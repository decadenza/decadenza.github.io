
import React from 'react'
import { type Icon as IconType } from '../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IconProps extends React.ComponentProps<typeof FontAwesomeIcon> {
    icon: IconType; // It expects one of the allowed icons defined in the constants file.
}

// Wrapper around the FontAwesome icon system.
export default function Icon({ icon, ...props }: IconProps): React.ReactElement {
    // Any className passed in props will be appended to the default class name.
    // The properties can be overridden.
    return <FontAwesomeIcon
        icon={icon}
        {...props} />
}