interface UserIdpageprops {
  params: {
    userId: string;
  };
}

const page = ({params}: UserIdpageprops)=>{
    return(
        <div>
            Userid: {params.userId}
        </div>
    );
}

export default page;