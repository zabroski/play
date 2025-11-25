export default function ServiceCard({ title, body }) {
  return (
    <article className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-purple-700 mb-2">{title}</h3>
      <p className="text-gray-600">{body}</p>
    </article>
  );
}
