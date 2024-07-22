import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar';
import { useLocation } from 'react-router-dom';
import { getRouteTitle } from '../../routing/routes';
import ProfileLayout from '../../layout/ProfileLayout';
import ProfileForm from './ProfileForm/ProfileForm';
import { fetchUserAttributes } from 'aws-amplify/auth';

function Profile() {
    const [attributes, setAttributes] = useState({});
    const location = useLocation();
    const title = getRouteTitle(location.pathname);

    return (
        <ProfileLayout content={<ProfileForm attributes={attributes} />} header={<Navbar />} title={title} />
    );
}

export default Profile;