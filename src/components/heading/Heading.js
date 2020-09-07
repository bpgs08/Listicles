import React from "react";
import AddTodo from "../../containers/AddTodo";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { colors, media, space } from "../../utils/theme";
import HeaderElements from "../headerElements";

const Heading = () => {
  return (
    <HeadingContainer>
      <ListiclesText type={4} bold={true} align="center" color={"white"}>
        LISTICLES
      </ListiclesText>
      <MarketingContentText
        type={6}
        bold={false}
        align="center"
        color={"white"}
      >
        Marketing Content <FontAwesomeIcon icon={faPencilAlt} />
      </MarketingContentText>
      <AddTodo />
    </HeadingContainer>
  );
};

const ListiclesText = styled(HeaderElements)`
  margin-bottom: ${space[6]};
`;

const MarketingContentText = styled(HeaderElements)`
  margin-bottom: ${space[1]};
`;

const HeadingContainer = styled.div`
  background: ${colors.purple};
  padding: ${space[2]} ${space[0]};
  width: 100%;
  ${media.tablet`
      width: 80%;
      min-width: 750px;
      max-width: 1440px;
      margin: 0 auto;
  `};
`;

export default Heading;