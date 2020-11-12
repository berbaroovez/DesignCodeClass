import React from "react"
import styled from "styled-components"
import { H1, MediumText } from "../styles/TextStyles"
import {themes} from "../styles/ColorStyles"
import PurchaseButton from "../buttons/PurchaseButton"
import MockupAnimation from "../animations/MockupAnimation"
export default function HeroSection() {
  return (
    <>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <Title>
              Design
              <br /> and code React apps
            </Title>
            <Description>
              Don’t skip design. Learn design and code, by building real apps,
              collaborate and solving product UI problems.
            </Description>
            <PurchaseButton
              title="Start learning"
              subtitle = "120+ hours of video"
            />
          </TextWrapper>
          <MockupAnimation/>
        </ContentWrapper>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
  overflow: hidden;
`
const ContentWrapper = styled.div`
  position:relative;
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
  display:grid;
  grid-template-columns:500px auto;
`

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
`

const Title = styled(H1)`
  color: ${themes.dark.text1};
`
const Description = styled(MediumText)``
