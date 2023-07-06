export type ErrorsChecks = {
  name: { is: boolean, message: string };
  email: { is: boolean, message: string, match: boolean };
  message: { is: boolean, message: string };
}