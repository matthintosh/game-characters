import styled from "@emotion/styled";
import { Card } from "../atoms/Card";
import { SubTitle } from "../atoms/Subtitle";
import { Title } from "../atoms/Title";
import { PropsWithChildren } from "react";
import { Avatar } from "../atoms/Avatar";

interface CardProps {
  imgUrl: string;
  title: string;
  subtitle?: string;
  variant?: "contentLeft" | "centeredImageTextLeft" | "contentRow";
  gridArea?: string;
}

export const CharacterCard = ({
  imgUrl,
  title,
  children,
  subtitle,
  variant,
  gridArea,
}: PropsWithChildren<CardProps>) => {
  switch (variant) {
    case "contentLeft":
      return (
        <Card style={{ gridArea }}>
          <CardContentLeft>
            <Avatar src={imgUrl} alt="image" />
            <Title>{title}</Title>
            {subtitle && <SubTitle>{subtitle}</SubTitle>}
            {children}
          </CardContentLeft>
        </Card>
      );
    case "centeredImageTextLeft":
      return (
        <Card style={{ gridArea }}>
          <CardContentLeft>
            <Avatar
              src={imgUrl}
              alt="image"
              size="200px"
              style={{ alignSelf: "center" }}
            />
            <Title>{title}</Title>
            {subtitle && <SubTitle>{subtitle}</SubTitle>}
            {children}
          </CardContentLeft>
        </Card>
      );
    case "contentRow":
      return (
        <Card style={{ gridArea }}>
          <CardContentRow>
            <div>
              <Title>{title}</Title>
              {subtitle && <SubTitle>{subtitle}</SubTitle>}
              {children}
            </div>
            <Avatar
              src={imgUrl}
              alt="image"
              size="100px"
              style={{ alignSelf: "center" }}
            />
          </CardContentRow>
        </Card>
      );
    default:
      return (
        <Card style={{ gridArea }}>
          <CardContentCentered>
            <img src={imgUrl} width={"60%"} />
            <Title>{title}</Title>
            {subtitle && <SubTitle>{subtitle}</SubTitle>}
            {children}
          </CardContentCentered>
        </Card>
      );
  }
};

const CardContentCentered = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px",
});

const CardContentLeft = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  justifyContent: "center",
});

const CardContentRow = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  alignItems: "center",
});
