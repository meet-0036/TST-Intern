export default function Input({ richText, ...props }) {
  return richText ? <textarea {...props} /> : <input {...props} />;
}
