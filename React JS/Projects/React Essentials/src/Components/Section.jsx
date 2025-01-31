export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

// JS Feature: ...props = Rest Property - All remaining object properties are collected into a new object ('props')
// This helps to wrap built-in properties set on custom components
