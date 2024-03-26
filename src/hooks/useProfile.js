import { useEffect, useState } from 'react';

const SAVE_PROFILE_KEY = 'arcblock_profile_info';
const DEFAULT_PROFILE = {
  name: 'Tester',
  email: 'tester@gmail.com',
  phone: '13000000000',
};
export const useProfile = () => {
  const [profileInfo, setProfileInfo] = useState({
    name: null,
    email: null,
    phone: null,
  });

  useEffect(() => {
    const fetchProfileInfo = async () => {
      const result = localStorage.getItem(SAVE_PROFILE_KEY);
      if (result) {
        try {
          const info = JSON.parse(result);
          setProfileInfo(info);
        } catch (error) {
          setProfileInfo(DEFAULT_PROFILE)
        }
      }
      else {
        setProfileInfo(DEFAULT_PROFILE);
      }
    };
    fetchProfileInfo();
  }, []);

  const updateProfile = (info) => {
    localStorage.setItem(SAVE_PROFILE_KEY, JSON.stringify(info));
    setProfileInfo(info);
  };
  return {
    profileInfo,
    updateProfile,
  };
};
