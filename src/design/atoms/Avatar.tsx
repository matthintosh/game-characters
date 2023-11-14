import styled from "@emotion/styled";

interface AvatarProps {
  size?: string;
}

export const Avatar = styled("img")(({ size }: AvatarProps) => ({
  width: size ?? "40px",
  height: size ?? "40px",
  borderRadius: "50%",
  objectFit: "cover",
  objectPosition: "top",
}));
