export type Soluction = {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }>;
  name: string;
  description: string;
}