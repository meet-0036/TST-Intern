export default function Tabs({ children, buttons, ButtonContainer = "menu" }) {
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}

// Use for set proper wrapper element(dynamic)
// assign component identifier as <menu> tag to Tabs also pass <div>,<ul>,{Section}
