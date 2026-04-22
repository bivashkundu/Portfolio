export function CustomSize(value: number | string): string {
  if (typeof value === 'number') {
    const minValue = value >= 0 ? value : value * 7;
    const maxValue = value >= 0 ? value * 7 : value;
    return `clamp(${minValue}px, ${(value / 1920) * 100}vw, ${maxValue}px)`;
  }
  return value;
}

export function CustomSpacing(...values: (number | string)[]): string {
  const responsiveValues = values
    .map(v => {
      if (typeof v === 'number') {
        const minValue = v >= 0 ? v : v * 7;
        const maxValue = v >= 0 ? v * 7 : v;
        return `clamp(${minValue}px, ${(v / 1920) * 100}vw, ${maxValue}px)`;
      }
      return v;
    })
    .join(' ');

  return responsiveValues;
}

export function onResize(callback: () => void) {
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', callback);
    return () => window.removeEventListener('resize', callback);
  }
  return () => {};
}

if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    @media (min-width: 1920px) {
      :root { --scale-factor: 1vw; }
    }
    @media (max-width: 1919px) {
      :root { --scale-factor: 1px; }
    }
  `;
  document.head.appendChild(style);
}
