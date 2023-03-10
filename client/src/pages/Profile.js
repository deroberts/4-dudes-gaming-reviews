import React from "react";
import { useQuery } from "@apollo/client";

import { QUERY_ME } from "../utils/queries";

const Profile = () => {
  const { loading, data } = useQuery(QUERY_ME);

  const profile = data?.me;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile?.name) {
    return (
      <h4>
        You need to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <h2 className="card-header">
        {profile._id ? (
          <>
            {`${profile.name}'s : Your Games: '`}
            {profile.games?.map((game) => (
              <div key={game.name}>{game.name}</div>
            ))}
          </>
        ) : (
          ""
        )}
      </h2>
    </div>
  );
};

export default Profile;
