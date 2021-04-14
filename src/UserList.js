import React from 'react'

const UserList = ({users}) => {
    return (
        <div className="users">
            <div className="row">
                {users.map((data,i)=>
                  <div className="col-md-4">
                    <div className="u-card text-center">
                        <img src={data.avatar_url} />
                        <h4 className="mt-3">{data.login}</h4>
                        <a target="_blank" rel="noreferrer" className="btn btn-info " href={data.html_url}>Click Here To View Github Profile</a>
                    </div>
                  </div>
                )}
            </div>
        </div>
    )
}

export default UserList
