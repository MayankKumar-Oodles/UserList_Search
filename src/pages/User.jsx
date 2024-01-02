import React, { useEffect, useState ,useMemo} from 'react'
import UserData from '../store/UserData.json'

const User = (props) => {
    const [user,setUser]= useState([])
    //    console.log(props.data)

    
    // Memoized search function
  const searchUsers = useMemo(() => {
    return user.filter(user => user.userId.toLowerCase().includes(props.data.toLowerCase()));
  }, [user, props.data]);

    
    
    useEffect(()=>{
        const appUser =()=>{
             
           setUser(UserData.Employees)    
        }
        appUser()
    },[])
  return (
          <section className="section-data">
                 
                         <table>
                                <thead>
                                      <tr>
                                           <th>UserId</th>
                                           <th>JobTitleName</th>
                                           <th>FirstName</th>
                                           <th>LastName</th>
                                      </tr>
                                </thead>

                                <tbody>
                                        {
                                            
                                                //  user.filter((item)=>{
                                                //     return item.userId==='' 
                                                //     ? item
                                                //     :item.userId.toLowerCase().includes(props.data)
                                                //  })
                                                searchUsers.map((item)=>{
             
                                                    return(
                                                        <tr key={item.emailAddress}>
                                                            <th>{item.userId}</th>
                                                            <th>{item.jobTitleName}</th>
                                                            <th>{item.firstName}</th>
                                                            <th>{item.lastName}</th>
                                                        </tr>
                                                        ) 
                                                })
                                        }
                                </tbody>
                         </table>
                  
          </section>
  )
}

export default User
