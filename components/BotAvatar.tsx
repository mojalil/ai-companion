import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface BotAvatarProps {
  src: string;
}

const BotAvatar = ({ src }: BotAvatarProps) => {
  return (
    <Avatar className="h-12 w-12">
      <AvatarImage src={src} />
      <AvatarFallback>Bot</AvatarFallback>
    </Avatar>
  );
};

export default BotAvatar;
