export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

// Js Feature : ...Props = Rest Property - All remaining object properties into a new object('props')
// helps to wrap built-in properties seted to custom components
