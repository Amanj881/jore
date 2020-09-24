import React from 'react'
import Alert from './Alert'

export default {
    title: "Alert",
    component: Alert,
};

export const informative = () => (
    <Alert type="informative" labelText="Informative" description="Check the storage"></Alert>
);

export const danger = () => (
    <Alert type="danger"  labelText="Danger" description="There are 2 errors in the database"></Alert>
);

export const warning = () => (
    <Alert type="warning"  labelText="Warning" description="There is issue with the design"></Alert>
);

export const success = () => (
    <Alert type="success"  labelText="Success" description="This is success alert"></Alert>
);