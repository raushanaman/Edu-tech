export const Profile = ()=>{
    return(
        <>
            <ProfileCard
            name = "Bob"
            age={25}
            greeting ={
                <div>
                    <strong>Hello Bob, keep the great work!</strong>
                </div>
            }
            >
                <p>Hobbies:Gaming, Cooking</p>
                <button>Contact</button>
            </ProfileCard>
        
        </>
    )
}
//export default Profile;

function ProfileCard(props){
    const {name,age,greeting,children}=props;
    return(
        <>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            {greeting}
            {children}
        </>
    )
}