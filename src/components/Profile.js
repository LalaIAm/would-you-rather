import React from 'react';
import { connect } from 'react-redux';

const Profile = (props) => {
    return (
        <div>
            
        </div>
    );
};

function mapStateToProps({ users, authedUser, questions }) {
   const userProfile = users[authedUser]
   
    
    return {
        questions,
        userProfile,
    }
}

export default connect(mapStateToProps)(Profile);