export function __changeTheRootPath(
  params: string[],
  isPathExist: boolean,
  src: string
) {
  const newPath = isPathExist ? `${src}\\${params[0]}` : src;
  params.shift();
  params.unshift(newPath);
}
