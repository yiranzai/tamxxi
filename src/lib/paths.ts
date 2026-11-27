const rawBase = import.meta.env.BASE_URL;
export const base = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;

export const url = (path = "") => {
  const clean = path.replace(/^\/+|\/+$/g, "");
  return clean ? `${base}${clean}/` : base;
};

export const asset = (name: string) => `${base}assets/${name}`;
