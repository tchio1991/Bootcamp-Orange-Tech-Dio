import React from "react";

import { Container, NameText, Progress, UserPicture } from "./styles";

export default function UserInfor({ nome, image, percentual }) {
  return (
    <Container>
      <UserPicture src={image} />
      <div>
        <NameText>{nome}</NameText>
        <Progress percentual={percentual} />
      </div>
    </Container>
  );
};