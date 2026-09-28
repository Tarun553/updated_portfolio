export function AlkushMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 557 381"
      fill="none"
      {...props}
    >
      {/* T */}
      <rect x="50" y="90" width="200" height="46" rx="4" fill="currentColor" />
      <rect x="127" y="136" width="46" height="160" rx="4" fill="currentColor" />
      {/* C */}
      <rect x="307" y="90" width="200" height="46" rx="4" fill="currentColor" />
      <rect x="307" y="136" width="46" height="114" rx="4" fill="currentColor" />
      <rect x="307" y="250" width="200" height="46" rx="4" fill="currentColor" />
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M16 20h88v24H72v64H48V44H16V20Zm136 0h88v24h-64v40h64v24h-88V20Z"/></svg>`;
}

