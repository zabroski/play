export default function Button({ children, className = '', ...props }) {
  return (
    <button
      {...props}
      className={
        "inline-flex items-center px-4 py-2 rounded-lg font-semibold text-white shadow-sm bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-800 transition " + 
        className
      }
    >
      {children}
    </button>
  );
}