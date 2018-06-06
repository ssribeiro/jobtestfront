export interface Screen {
  width: number;
  height: number;
  orientation: string;
  device: string;
  browser: string;
}

export const InitialScreen:Screen = {
  width: 320,
  height: 568,
  orientation: 'portrait',
  device: 'android',
  browser: 'chrome'
}
