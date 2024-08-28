import React, { useEffect, useState } from 'react';
import { fetchUserProfile } from './api';
import './Profile.css';

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      const fetchedProfile = await fetchUserProfile();
      setProfile(fetchedProfile);
    };

    loadProfile();
  }, []);

  if (!profile) {
    return <p>Cargando perfil...</p>;
  }

  return (
    <div className="profile-container">
      <h1>Perfil de Usuario</h1>
      <p><strong>Usuario:</strong> {profile.username}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      {/* Agrega más detalles del perfil según sea necesario */}
    </div>
  );
}

export default Profile;
