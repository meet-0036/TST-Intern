export default function Tabs({ children, buttons, ButtonContainer = 'menu' }) {      // assign component identifier <menu> tag to Tabs also pass <div>,<ul>,{Section}
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
