import React from "react"
import styled, { keyframes } from "styled-components"
import { H1, MediumText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import PurchaseButton from "../buttons/PurchaseButton"
import MockupAnimation from "../animations/MockupAnimation"
import WaveBackground from "../backgrounds/WaveBackground"
export default function HeroSection() {
  return (
    <>
      <Wrapper>
        <WaveBackground />
        <ContentWrapper>
          <TextWrapper>
            <Title>
              Design
              <br /> and code <span>React</span> apps
            </Title>
            <Description>
              Don’t skip design. Learn design and code, by building real apps,
              collaborate and solving product UI problems.
            </Description>
            <PurchaseButton
              title="Start learning"
              subtitle="120+ hours of video"
            />
          </TextWrapper>
          <MockupAnimation />
        </ContentWrapper>
      </Wrapper>
    </>
  )
}

const animation = keyframes`
0% { opacity: 0; transform: translateY(-10px); filter:blur(10px); }

100% { opacity: 1 ; transform: translateY(0px); filter:blur(0px);}
`

const Wrapper = styled.div`
  overflow: hidden;
`
const ContentWrapper = styled.div`
  position: relative;
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 500px auto;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 250px;
  }
`

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;

  > * {
    opacity: 0;
    animation: ${animation} 1s 0.2s forwards;

    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`

const Title = styled(H1)`
  background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 450px) {
    font-size: 48px;
  }
`
const Description = styled(MediumText)``
