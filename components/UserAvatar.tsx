import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";


const UserAvatar = () => {
  const {user} = useUser();
  return (
    <Avatar className="h-12 w-12">
      <AvatarImage src={user?.imageUrl} />
      <AvatarFallback>Bot</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
