import styled from "styled-components";

const App = () => {

  // Instructions from: 
  // https://styled-components.com/docs/basics#installation

  // I have added my personal notes for clarity

  // Create a Title component that'll render an <h1> tag with some styles
  // Raw CSS goes inside the template literal
  const Title = styled.h1`
    font-size: 1.5em;
    font-family: Arial;
    text-align: center;
    color: #BF4F74;
  `;

  // Create a Wrapper component that'll render a <section> tag with some styles
  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;

  // You can pass a function ("interpolations") to a styled component's template literal 
  // to adapt it based on its props.
  const Button = styled.button<{ $primary?: boolean; }>`
    background: ${props => props.$primary ? "#BF4F74" : "white"};
    color: ${props => props.$primary ? "white" : "#BF4F74"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #BF4F74;
    border-radius: 3px;
  `;

  // Box with props
  const Box = styled.div<{ $dark?: boolean }>`
    background: ${props => props.$dark ? "black" : "white"};
    color: ${props => props.$dark ? "white" : "black"};
    padding: 20px;
    min-height: 30px;
    width: 100px;
  `;

  const ButtonParent = styled.button`
    background-color: #fff;
    color: #BF4F74;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #BF4F74;
    border-radius: 3px;
  `;

  // A new component based on ButtonParent, but with some override styles
  // TomatoButton inherits CSS style from ButtonParent
  const TomatoButton = styled(ButtonParent)`
    color: tomato;
    border-color: tomato;
  `;

  // Passing props

  // Create an Input component that'll render an <input> tag with some styles
  // Takes in a $inputColor as prop, if not provided
  // a default style (#BF4F74) will be used
  const Input = styled.input<{ $inputColor?: string; }>`
    padding: 0.5em;
    margin: 0.5em;
    color: ${props => props.$inputColor || "#BF4F74"};
    background: papayawhip;
    border: none;
    border-radius: 3px;
  `;

  return (
    <>

      <Wrapper>
        <Title>
          Hello World
        </Title>
      </Wrapper>

      <Button>Normal</Button>
      <Button $primary>Primary</Button>

      <Box $dark>I am a box</Box>
      <Box>I am a box</Box>

      <TomatoButton>Tomato Button</TomatoButton>

      {/* Render TomatoButton as an anchor link <a> (Polymorphic prop) */}
      {/* 
        * Use the attribute "as" to render a component as a different element
      */}
      <TomatoButton as="a" href="https://google.com">Tomato Button as a link</TomatoButton>

      <Input defaultValue="@probablyup" type="text" />

      {/* Pass in "black" as $inputColor */}
      <Input defaultValue="@geelen" type="text" $inputColor="black" />

    </>
  );
}
 
export default App;