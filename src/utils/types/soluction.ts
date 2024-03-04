export type Soluction = {
  tag: string
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }>;
  name: string;
  description: string;
}