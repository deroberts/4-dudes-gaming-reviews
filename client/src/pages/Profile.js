import React from "react";
import GameCard from "../components/GameCard";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_SINGLE_PROFILE, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";

const Profile = () => {
  

  // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const { loading, data } = useQuery(
    QUERY_ME
  
  );

  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
  const profile = data?.me;

  // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
 

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
              <div key={game.name}>
                {game.name}
                </div>
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
