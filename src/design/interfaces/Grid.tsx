import styled from "@emotion/styled";

export const Grid = styled("div")`
  display: grid;
  gap: 10px;
  grid-template-rows: repeat(3, auto);
  grid-template-columns: repeat(4, auto);
  grid-template-areas: "card1 card2 card3 card3" "card4 card4 card3 card3" "card5 card6 card7 card8";
`;
