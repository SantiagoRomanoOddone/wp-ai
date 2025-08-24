

export default function Icon({ name, className = "w-5 h-5" }) {
  const paths = {
    spark: (
      <path
        d="M12 2l1.8 4.7L18 8.5l-4.2 1.8L12 15l-1.8-4.7L6 8.5l4.2-1.8L12 2z"
        fill="currentColor"
        className="opacity-90"
      />
    ),
    rocket: (
      <path
        d="M13 3c4 0 6 2 8 6-2 .5-3.5 1.2-4.7 2.4l-3.7-3.7C13.8 6.5 14.5 5 15 3c-1.2-1-2-.9-2-.9zM6.3 9.3l8.4 8.4c-2.6 2.2-6.2 2.4-8.6.1-2.4-2.4-2.2-6 .1-8.5zM19 19l-2 2"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    ),
    shield: (
      <path
        d="M12 3l7 3v6c0 5-3.6 7.7-7 9-3.4-1.3-7-4-7-9V6l7-3z"
        fill="currentColor"
      />
    ),
    chart: (
      <path d="M4 20h16M7 16v-6M12 20V8m5 12v-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    ),
    cluster: (
      <path d="M6 6h.01M18 6h.01M12 4h.01M4 12h.01M20 12h.01M6 18h.01M18 18h.01M12 20h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    ),
    time: (
      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    ),
    mail: (
      <path d="M3 7l9 6 9-6M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    ),
    map: (
      <path d="M9 6l6-2 6 2v12l-6-2-6 2-6-2V4l6 2z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    ),
    phone: (
      <path d="M4 5c0 7 8 15 15 15l2-4-5-3-3 2c-3-1-6-4-7-7l2-3-3-5-4 2z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    ),
  };
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      {paths[name]}
    </svg>
  );
}