declare module "*.svg" {
  // const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  const content: any;
  export default content;
}

declare module "*.png" {
  const value: any;
  export default value;
}
