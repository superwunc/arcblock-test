import React, { useState } from 'react';
import ProfileEditor from './components/ProfileEditor';
import ProfileInfo from './components/ProfileInfo';
import { useProfile } from '../../hooks/useProfile';
import 'bulma/css/bulma.min.css';
import './index.css';

const PROFILE_STATUS_READ = 'read';
const PROFILE_STATUS_EDIT = 'edit';
function Profile() {
  const [status, setStatus] = useState(PROFILE_STATUS_READ);
  const { profileInfo, updateProfile } = useProfile();

  return (
    <>
      <div className="profile-container">
        <article className="panel is-primary">
          <p className="panel-heading">Profile</p>
          <div className="panel-block">
            <div className="profile-edit">
              {status === PROFILE_STATUS_READ && (
                <ProfileInfo
                  data={profileInfo}
                  onUpdate={() => {
                    setStatus(PROFILE_STATUS_EDIT);
                  }}></ProfileInfo>
              )}
              {status === PROFILE_STATUS_EDIT && (
                <ProfileEditor
                  data={profileInfo}
                  onSave={(data) => {
                    updateProfile(data);
                    setStatus(PROFILE_STATUS_READ);
                  }}
                  onCancel={() => {
                    setStatus(PROFILE_STATUS_READ);
                  }}></ProfileEditor>
              )}
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default Profile;
